import express from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const verifyToken = (token: string) => {
  let payload: any;

  try {
    payload = verify(token, process.env.TOKEN_KEY_SECRET as string);
  } catch (error) {
    return "Invalid";
  }
  return payload.username;
};

export { verifyToken };
