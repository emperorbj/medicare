import { connectDB } from "./config/connectdb.js";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from "./routes/adminRoute.js";
// import doctorRouter from "./routes/doctorRouter.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
connectCloudinary();

// middlewares
app.use(cors());
app.use(express.json());

// api routes endpoints

app.use('/api/admin',adminRouter)
// app.use('/api/doctor',doctorRouter)


app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})