import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

interface QuoteRequestBody {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  service: string;
  details: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Quote form is not configured yet. Please call us instead." },
      { status: 500 },
    );
  }

  let body: Partial<QuoteRequestBody>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, suburb, service, details } = body;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(suburb) ||
    !isNonEmptyString(service)
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${siteConfig.businessName} Website <onboarding@resend.dev>`,
    to: siteConfig.email,
    replyTo: email,
    subject: `Quote request from ${name}`,
    text: [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Suburb: ${suburb}`,
      `Service needed: ${service}`,
      "",
      "Details:",
      details || "(none provided)",
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
