// config.js
import dotenv from 'dotenv';
import crypto from 'crypto'
dotenv.config();



const secretKey = crypto.randomBytes(64).toString('hex');


export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: "mongodb://localhost:27017",
  JWT_SECRET: process.env.JWT_SECRET  || "06c36368019b4c934c5d63bf570c54a4",
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
};
