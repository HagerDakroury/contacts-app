import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const createAccessToken = (payload: { username: string; password: string }) =>
  sign(payload, process.env.TOKEN_KEY_SECRET as string, {
    expiresIn: "5d",
  });

export { createAccessToken };
