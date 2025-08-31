"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    from: "onboarding@resend.dev",
    to: "veaseyjayland3@gmail.com",
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
