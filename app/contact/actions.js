"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  // 1. HONEYPOT CHECK
  // If this hidden field is filled, it is a bot.
  // We return "success" to fool the bot into thinking it worked.
  if (formData.get("website_url")) {
    return { success: true, message: "Email sent successfully!" };
  }

  // 2. Validate the real data
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    // 3. Send the email
    const data = await resend.emails.send({
      // Use 'onboarding@resend.dev' if you haven't verified a domain yet
      from: "Contact Form <onboarding@resend.dev>",
      to: "mujtabakhalid20@gmail.com",
      reply_to: email,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return {
        success: false,
        message: "Failed to send email. Please try again.",
      };
    }

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Server Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
