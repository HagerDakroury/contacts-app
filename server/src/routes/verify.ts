import express from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post(`/verify`, (req, res) => {
  const token = req.header("Authorization")?.split(" ")[1];
  const role = req.body.role;
  if (!token) {
    return res.status(400).send("No Token Provided");
  }

  try {
    let payload: any;
    payload = verify(token, process.env.TOKEN_KEY_SECRET as string);
    if (role && payload.role != role) {
      return res.status(400).send("Role not authorized");
    }
    return res.status(200).send({ message: "Verified", _id: payload._id });
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
});

export { router as verifyRouter };
