import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, reason, message } = body;

    await sendEmail({ name, email, phone, reason, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
