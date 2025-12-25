"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(formData) {
  // 1. HONEYPOT CHECK
  // If this hidden field is filled, it is a bot.
  if (formData.get("website_url")) {
    return { success: true, message: "Application submitted successfully!" };
  }

  // 2. Extract Data
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const location = formData.get("location");
  const position = formData.get("position");
  const experienceLevel = formData.get("experienceLevel");
  const coverLetter = formData.get("coverLetter");
  const resumeFile = formData.get("resume");

  // 3. Validation
  if (!fullName || !email || !position || !experienceLevel || !resumeFile) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    // 4. Process File Attachment
    // Convert the File object (from FormData) into a Buffer for Resend
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 5. Send Email with Attachment
    const data = await resend.emails.send({
      from: "Careers <onboarding@resend.dev>",
      to: "mujtabakhalid20@gmail.com",
      reply_to: email,
      subject: `Job Application: ${position} - ${fullName}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experienceLevel}</p>
        <hr />
        <h3>Cover Letter:</h3>
        <p>${
          coverLetter
            ? coverLetter.replace(/\n/g, "<br>")
            : "No cover letter provided."
        }</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return {
        success: false,
        message: "Failed to submit application. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "Application submitted successfully! HR will contact you shortly.",
    };
  } catch (error) {
    console.error("Server Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
