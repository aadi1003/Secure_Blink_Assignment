import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js'
import logger from './utils/logger.js';
import  dbConnection  from './database/db.js';


const app = express();


// Middleware
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true,
}));
app.use(express.json());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user',userRoutes)


//Database Connection
dbConnection();


app.get("/",(req,res)=>{
    res.send(`Deafult api is working`);
})


// Start Server
app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
