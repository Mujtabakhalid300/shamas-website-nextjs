"use server";

import { MailtrapClient } from "mailtrap";

export async function sendEmail(formData) {
  // 1. HONEYPOT TRAP (Spam Protection)
  const honeypot = formData.get("website_url");
  if (honeypot) {
    return { success: true, message: "Email sent successfully!" };
  }

  // 2. Extract Data
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // 3. Server-side Validation
  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    // 4. Initialize Mailtrap
    const client = new MailtrapClient({
      token: process.env.MAILTRAP_TOKEN,
    });

    const sender = {
      // NOTE: Since you are using the free/demo tier, you MUST use this sender.
      // You cannot use your own domain until you verify it in Mailtrap.
      email: "hello@demomailtrap.co",
      name: "Shamas Contact Form",
    };

    const recipients = [
      {
        email: process.env.MAILTRAP_TO_EMAIL,
      },
    ];

    // 5. Send Email
    await client.send({
      from: sender,
      to: recipients,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #00bcd4;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
      // FIXED: Use 'headers' for Reply-To
      headers: {
        "Reply-To": `${name} <${email}>`,
        "X-Priority": "1", // Optional: Marks as high priority
      },
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Mailtrap Error:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again.",
    };
  }
}
