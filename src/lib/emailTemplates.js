export function adminNewsletterTemplate({ fname, email }) {
  return {
    subject: "New Newsletter Signup",
    text: `A new user signed up for the newsletter.\n\nName: ${fname}\nEmail: ${email}`,
    html: `<p><strong>Name:</strong> ${fname}</p><p><strong>Email:</strong> ${email}</p>`,
  };
}

export function customerNewsletterTemplate({ fname }) {
  return {
    subject: "Thank you for signing up!",
    text: `Hi ${fname},\n\nThank you for signing up for the Dreamland Athletics newsletter! We'll keep you updated.`,
    html: `    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e5e5e5; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
  <div style="background-color: #000; text-align: center; padding: 20px;">
    <img src="https://res.cloudinary.com/dzhgubztu/image/upload/v1760467027/dl_white_empty_primary_bofism.png" alt="Dreamland Athletics" style="max-width: 300px; height: auto;" />
  </div>

  <div style="background-color: #f1c419; text-align: center; padding: 20px;">
    <h2 style="margin: 0; color: #000; font-size: 24px;">Hi ${fname},</h2>
  </div>

  <div style="padding: 30px 24px; color: #333; text-align: center; line-height: 1.6;">
    <h3 style="margin-bottom: 12px; font-size: 20px;">Welcome to Dreamland Athletics!</h3>
    <p style="margin: 0; font-size: 15px; color: #555;">
      Thank you for signing up for our newsletter! You’re now part of the Dreamland community —
      where ambition meets discipline and dreams turn into milestones.
    </p>
    <p style="margin-top: 16px; font-size: 15px; color: #555;">
      Stay tuned for updates, exclusive offers, and inspiring stories from athletes like you.
    </p>
  </div>

  <hr style="border: none; border-top: 1px solid #eee; margin: 0;" />

  <div style="background-color: #fafafa; padding: 16px; text-align: center; font-size: 12px; color: #888;">
    <p style="margin: 0;">This message was sent by the Dreamland Athletics Team.</p>
    <p style="margin: 4px 0 0;">© ${new Date().getFullYear()} Dreamland Athletics. All rights reserved.</p>
  </div>
</div>`,
  };
}

export function contactTemplate({ fname, email, phone, message }) {
  return {
    subject: "We have recieved your request",
    text: `Name: ${fname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    html: `
  <body style="margin: 0; padding: 0; background-color: #f5f5f5;">
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e5e5e5; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

  <div style="background-color: #000; text-align: center; padding: 20px;">
    <img src="https://res.cloudinary.com/dzhgubztu/image/upload/v1760467027/dl_white_empty_primary_bofism.png" alt="Dreamland Athletics" style="max-width: 300px; height: auto;" />
  </div>

  <div style="background-color: #FFD700; padding: 20px; text-align: center;">
    <h2 style="margin: 0; color: #000; font-size: 22px;">We’ve Received Your Request</h2>
  </div>

  <div style="padding: 28px 24px; background-color: #fff; color: #333; line-height: 1.6;">
    <p style="margin-bottom: 16px; font-size: 15px; color: #444;">
      Hi <strong>${fname}</strong>,<br />
      Thank you for reaching out to Dreamland Athletics! Our team has received your message and will get back to you as soon as possible.
    </p>

    <div style="background-color: #f9f9f9; border: 1px solid #eee; border-radius: 6px; padding: 16px; margin-top: 20px;">
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${fname}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${phone}</p>
      <p style="margin: 0;"><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    </div>

    <p style="margin-top: 20px; font-size: 14px; color: #555;">
      We appreciate your patience and interest. You’ll hear from us soon!
    </p>
  </div>

  <hr style="border: none; border-top: 1px solid #eee; margin: 0;" />

  <div style="background-color: #fafafa; padding: 16px; text-align: center; font-size: 12px; color: #888;">
    <p style="margin: 0;">This message was sent via the Dreamland Athletics Team.</p>
    <p style="margin: 4px 0 0;">© ${new Date().getFullYear()} Dreamland Athletics. All rights reserved.</p>
  </div>
</div>
        `,
  };
}
