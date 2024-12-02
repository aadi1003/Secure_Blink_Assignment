import express from 'express';
import { verifyToken, authorizeRoles } from '../middlewares/authMiddleware.js';
import logger from '../utils/logger.js';

const router = express.Router();

// Example route: Get user profile (accessible to authenticated users)
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    id: req.user.id,
    role: req.user.role,
    message: 'This is your profile.',
  });
});


// Example route: Admin-only access
router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  //logger.info(`Admin logged in: ${req.user.}`);
  res.json({
    message: 'Welcome, Admin! This is a restricted route.',
  });
});

export default router;
