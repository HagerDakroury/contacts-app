import express from "express";
import { User, makeUser } from "../models/model";
import { createAccessToken } from "../utils/authToken";

const router = express.Router();

router.post(
  `/signup`,

  async (req: any, res: any) => {
    const { username, password } = req.body;

    try {
      // see if the user exists
      if (await User.findOne({ username })) {
        return res.status(400).send("Account already exists!");
      }

      // making a new user and saving them into the database
      const newUser = await makeUser({
        username: username,
        password: password,
        contacts: [],
      });
      await newUser.save();

      // consider user signed in
      const userJWT = createAccessToken({
        username: username,
        password: password,
      });

      return res.status(201).send({ token: userJWT });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
);

export { router as signupRouter };
