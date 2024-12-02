import express from 'express';
import { register, login, forgotPassword } from '../controllers/authController.js';
import { resetPassword } from '../controllers/authController.js';
import { generalRateLimiter, loginRateLimiter } from '../controllers/secController.js';




const router = express.Router();

router.post('/register',generalRateLimiter, register);
router.post('/login',loginRateLimiter, login);
router.post('/forgot-password',generalRateLimiter, forgotPassword);
router.post('/reset-password/:token',generalRateLimiter, resetPassword);

export default router;
