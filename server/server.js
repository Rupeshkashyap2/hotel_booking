import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhook from "./controllers/clerkWebhooks.js";
import UserRouter from "./routes/userRoute.js";
import hotelRouter from "./routes/hotelRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoute.js";


connectDB();
connectCloudinary();

const app = express();

app.use(cors());


// Clerk middleware
app.use(express.json());
app.use(clerkMiddleware());

// API to listen to clerk  Webhooks
app.use("/api/clerk", clerkWebhook);

app.get("/", (req, res) => {
    res.send("API is running...");
});
app.use('/api/user',UserRouter);
app.use('/api/hotels',hotelRouter);
app.use('/api/room',roomRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});