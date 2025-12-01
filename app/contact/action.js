"use server";

import nodemailer from "nodemailer";

export async function sendEmailSMTP(formData) {
  // 1. Extract Data
  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");

  // 2. Basic Validation
  if (!email || !message || !name) {
    return {
      success: false,
      message: "Please fill in all fields.",
    };
  }

  // 3. Create Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // NOTE: Use an App Password, not your login password
    },
  });

  // 4. Mail Options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.RECIPIENT_EMAIL, // Where you want to receive the contact emails
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email, // Allows you to hit "Reply" in Gmail to answer the user
  };

  // 5. Send Email
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
