import nodemailer from 'nodemailer';
import { config } from '../config.js';

export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: config.EMAIL_HOST || "smtp.gmail.com" ,
    port: config.EMAIL_PORT || 465,
    auth: {
      user: config.EMAIL_USER || "your email id (sender)",
      pass: config.EMAIL_PASS || "mail app password (sender)",
    },
  });

  await transporter.sendMail({
    from: config.EMAIL_USER || "your email id (sender)",
    to,
    subject,
    text,
  });
};
