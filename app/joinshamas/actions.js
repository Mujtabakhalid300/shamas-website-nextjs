"use server";

import { MailtrapClient } from "mailtrap";

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
    // Mailtrap expects attachments as { filename: string, content: Buffer }
    const attachments = [];

    if (resumeFile && resumeFile.size > 0 && resumeFile.name !== "undefined") {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({ filename: resumeFile.name, content: buffer });
    }

    // 5. Initialize Mailtrap
    const client = new MailtrapClient({
      token: process.env.MAILTRAP_TOKEN,
    });

    const sender = {
      // NOTE: Use 'hello@demomailtrap.co' for the free/demo tier.
      // If you have a verified domain, use that instead.
      email: "hello@demomailtrap.co",
      name: "Job Application System",
    };

    const recipients = [
      {
        email: process.env.MAILTRAP_TO_EMAIL,
      },
    ];

    // 6. Send Email
    await client.send({
      from: sender,
      to: recipients,
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
      attachments: attachments,
      // FIXED: Use 'headers' for Reply-To
      headers: {
        "Reply-To": `${fullName} <${email}>`,
        "X-Priority": "1",
      },
    });

    return {
      success: true,
      message:
        "Application submitted successfully! HR will contact you shortly.",
    };
  } catch (error) {
    console.error("Mailtrap Error:", error);
    return {
      success: false,
      message: "Failed to submit application. Please try again.",
    };
  }
}
