import { Resend } from "resend";

const limits = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
} as const;

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function stripLineBreaks(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function validateFields(value: unknown): ContactFields | null {
  if (!isRecord(value)) {
    return null;
  }

  const name = value.name;
  const email = value.email;
  const subject = value.subject;
  const message = value.message;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim() ||
    name.trim().length > limits.name ||
    email.trim().length > limits.email ||
    subject.trim().length > limits.subject ||
    message.trim().length > limits.message
  ) {
    return null;
  }

  const trimmedEmail = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return null;
  }

  return {
    name: name.trim(),
    email: trimmedEmail,
    subject: subject.trim(),
    message: message.trim(),
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Please send valid JSON." }, { status: 400 });
  }

  if (isRecord(body) && typeof body.website === "string" && body.website) {
    return Response.json({ message: "Message sent." });
  }

  const fields = validateFields(body);
  if (!fields) {
    return Response.json(
      {
        error:
          "Please provide a valid name, email, subject, and message within the allowed limits.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const missingVariables = [
    !apiKey ? "RESEND_API_KEY" : null,
    !toEmail ? "CONTACT_TO_EMAIL" : null,
    !fromEmail ? "CONTACT_FROM_EMAIL" : null,
  ].filter((variable): variable is string => variable !== null);

  if (missingVariables.length > 0 || !apiKey || !toEmail || !fromEmail) {
    console.error(
      `Contact form is missing environment variable(s): ${missingVariables.join(", ")}`,
    );
    return Response.json(
      { error: "The contact form is temporarily unavailable." },
      { status: 500 },
    );
  }

  const name = stripLineBreaks(fields.name);
  const email = stripLineBreaks(fields.email);
  const subject = stripLineBreaks(fields.subject);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${fields.message}`,
    });

    if (error) {
      console.error("Resend failed to send the contact form email.", error);
      return Response.json(
        { error: "The contact form is temporarily unavailable." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Unexpected contact form sending failure.", error);
    return Response.json(
      { error: "The contact form is temporarily unavailable." },
      { status: 500 },
    );
  }

  return Response.json({ message: "Message sent." });
}
