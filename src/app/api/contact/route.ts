import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

interface ContactRequestBody {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please call us instead." },
      { status: 500 },
    );
  }

  let body: Partial<ContactRequestBody>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const sendFailedMessage = `Sorry, your enquiry could not be sent. Please try again in a moment, or email ${siteConfig.email} directly.`;

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `${siteConfig.businessName} Website <onboarding@resend.dev>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "(not provided)"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: sendFailedMessage }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact send failed:", error);
    return NextResponse.json({ error: sendFailedMessage }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
