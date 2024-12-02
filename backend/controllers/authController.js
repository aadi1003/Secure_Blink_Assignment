import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { config } from '../config.js';
import { sendEmail } from '../utils/email.js';
import logger from '../utils/logger.js';



const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, config.JWT_SECRET, { expiresIn: '1h' });
};



//Register User Controller
export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({ error: "Email , password & Role are required" });
    }


    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
    }


    const user = new User({ email, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



//Login User Controller
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      //console.log(user.role)
      if (!user || !(await bcrypt.compare(password, user.password))) {
        logger.warn(`Failed login attempt for email: ${email}`);
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(user);
      logger.info(`${user.role} logged in: ${email}`);
      res.json({ token });
    } catch (err) {
      logger.error(`Error during login: ${err.message}`);
      res.status(400).json({ error: err.message });
    }
};



//Forgot Password Controller
export const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Validate email
      if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
      }
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      // Generate a reset token (valid for 1 hour)
      const resetToken = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      await user.save();
      
      // Send reset email
      // const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/reset-password/${resetToken}`;
      const resetUrl = `${req.protocol}://localhost:5173/reset-password/${resetToken}`;
      const message = `You requested a password reset. Click the link to reset your password: ${resetUrl}`;
    //   console.log(resetUrl)
      await sendEmail(email, 'Password Reset Request', message);
      
      res.json({ message: 'Password reset link sent to your email.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
};



//Reset Password Controller
export const resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { newPassword } = req.body;
      
      console.log('Token:', token);
      console.log('New Password:', newPassword);

      // Validate inputs
      if (!token) {
        return res.status(400).json({ message: 'Token are required.' });
      }

      if(!newPassword){
        return res.status(400).json({ message: 'New password are required.' });
      }
      
      // Verify the token
      const decoded = jwt.verify(token, "06c36368019b4c934c5d63bf570c54a4");
      const user = await User.findById(decoded.id);
      
      if (!user || user.resetPasswordExpires < Date.now()) {
        return res.status(400).json({ message: 'Invalid or expired token.' });
      }
  
      // Update user's password
      user.password = newPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      
      await user.save();
      
      res.json({ message: 'Password updated successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while resetting your password.' });
    }
};
  












// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = generateToken(user);
//     res.json({ token });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };



 //export const forgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const resetToken = generateToken(user);
//     user.resetPasswordToken = resetToken;
//     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
//     await user.save();

//     const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/reset-password/${resetToken}`;
//     await sendEmail(email, 'Password Reset', `Reset your password: ${resetUrl}`);
//     res.json({ message: 'Password reset email sent' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };
//