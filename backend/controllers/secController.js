import rateLimit from 'express-rate-limit';



// Rate limiter for login endpoint
export const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 2, // Limit each IP to 5 requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes.',
});



// Rate limiter for other sensitive routes
export const generalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    message: 'Too many requests, please try again later.',
});

