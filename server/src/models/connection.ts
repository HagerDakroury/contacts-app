import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.URI;

const connectDb = () => mongoose.connect(uri as string);

export { connectDb };
