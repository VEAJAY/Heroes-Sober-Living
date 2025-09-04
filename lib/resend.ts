"use server";

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error(
    "Missing RESEND_API_KEY. Set it in Netlify environment variables."
  );
}

const resend = new Resend(apiKey);

export const sendEmail = async ({
  name,
  email,
  phone,
  reason,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}) => {
  await resend.emails.send({
    from: "contact@send.heroesandsoberliving.com",
    to: "veteranssoberliving@gmail.com",
    replyTo: email,
    subject: `New Contact: ${reason}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
};
