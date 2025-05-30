import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import {
  adminNewsletterTemplate,
  customerNewsletterTemplate,
} from "@/lib/emailTemplates";

export async function POST(req) {
  const { fname, email } = await req.json();

  const adminEmail = "shantanux001@gmail.com";

  // const fromMail = "Dreamland Athletics <dreamlandathletics@gmail.com>";
  const fromMail = "Dreamland Athletics <shantanux001@gmail.com>";
  const adminMail = adminNewsletterTemplate({ fname, email });
  const customerMail = customerNewsletterTemplate({ fname });

  

  try {
    // console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS, process.env.EMAIL_HOST);

    await transporter.sendMail({
      from: fromMail,
      to: adminEmail,
      subject: adminMail.subject,
      text: adminMail.text,
      html: adminMail.html,
    });

    await transporter.sendMail({
      from: fromMail,
      to: email,
      subject: customerMail.subject,
      text: customerMail.text,
      html: customerMail.html,
    });

    return NextResponse.json(
      { message: "Success" },
      { status: 200 }
    );

  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Error sending email", error: err.message },
      { status: 500 }
    );
  }
}
