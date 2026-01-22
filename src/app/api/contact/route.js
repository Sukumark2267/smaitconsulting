import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { contactTemplate } from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const { fname, email, phone, message } = await req.json();

    // Basic validation
    if (!fname || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Admin email (where you want to receive contact form messages)
    const adminEmail = "Jay@dreamlandathletics.com";

    // Email sender identity
    const fromMail = "smait consulting group <Jay@dreamlandathletics.com>";
    const customerMail = contactTemplate({ fname, email, phone, message });

    // Generate email content from your template
    const { subject, text, html } = contactTemplate({
      fname,
      email,
      phone,
      message,
    });

    // Send email to admin
    await transporter.sendMail({
      from: fromMail,
      to: adminEmail,
      subject,
      text,
      html,
    });

    await transporter.sendMail({
      from: fromMail,
      to: email,
      subject: customerMail.subject,
      text: customerMail.text,
      html: customerMail.html,
    });

    console.log("📩 New Contact Submission:", { fname, email, phone, message });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
