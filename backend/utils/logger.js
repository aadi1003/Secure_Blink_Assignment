import winston from 'winston';
import path from 'path';

// Define log format
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create logger instance
const logger = winston.createLogger({
  level: 'info', // Minimum level to log
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // Log to console
    new winston.transports.Console(),
    // Log to file
    new winston.transports.File({ filename: path.join('logs', 'app.log') }),
  ],
  exceptionHandlers: [
    // Handle uncaught exceptions
    new winston.transports.File({ filename: path.join('logs', 'exceptions.log') }),
  ],
  rejectionHandlers: [
    // Handle unhandled promise rejections
    new winston.transports.File({ filename: path.join('logs', 'rejections.log') }),
  ],
});

// Export logger instance
export default logger;
