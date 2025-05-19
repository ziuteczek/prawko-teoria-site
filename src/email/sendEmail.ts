import * as nodemailer from "nodemailer";

async function sendEmail(adress: string, text: string, subject: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "dymnystan@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: "dymnystan@gmail.com",
    to: adress,
    subject: subject,
    text: text,
  });
  return info;
}
export default sendEmail;
