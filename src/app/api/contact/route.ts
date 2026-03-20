import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

/**
 * POST /api/contact
 * Handles contact form submissions.
 * Validates input and sends an email notification.
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // TODO: Send email via Resend / Nodemailer / any provider
  // await sendEmail(result.data);

  return NextResponse.json(
    { message: "Message received. I will get back to you soon!" },
    { status: 200 }
  );
}
