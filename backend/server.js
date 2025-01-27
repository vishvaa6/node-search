import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDb from './db/connectToMongoDb.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser())

app.use('/api/user', authRoutes);

app.listen(process.env.PORT || 5000, () => {

    connectToMongoDb();
    console.log(`Server Listening To ${process.env.PORT}`)
})