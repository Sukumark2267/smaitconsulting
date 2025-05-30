import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", // e.g., smtp.gmail.com
//   port: 465,
//   secure: true,
//   auth: {
//     user: "shantanux001@gmail.com",
//     pass: "mpipjufcdtrjkssc",
//   },
// });

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
