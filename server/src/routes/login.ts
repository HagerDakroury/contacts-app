import express from "express";
import { User } from "../models/model";
import { PasswordHasher } from "../utils/passHash";
import { createAccessToken } from "../utils/authToken";

const router = express.Router();

router.post(`/login`, async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).send("Username is not found");
    }
    const passValid = await PasswordHasher.compare(user.password, password);
    if (!passValid) {
      return res.status(400).send("Password is not correct");
    }
    const hashedPass = user.password;

    const userJWT = createAccessToken({
      username: username,
      password: hashedPass,
    });

    return res.status(201).send({ token: userJWT });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

export { router as loginRouter };
