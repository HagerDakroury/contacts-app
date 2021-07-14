import express from "express";
import { Contact, User } from "../models/model";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router();

router.get(
  `/list`,

  async (req: any, res: any) => {
    const token = req.header("Authorization")?.split(" ")[1];

    //verifying the user's token
    const username = verifyToken(token);
    if (username == "Invalid") {
      return res.status(400).send("Invalid user!");
    }
    let contacts: any = [];

    try {
      const user = await User.findOne({ username: username });
      if (user) {
        for (const contact of user.contacts) {
          let c = await Contact.findById(contact);
          contacts.push(c);
        }
      } else return res.status(400).send("User not found");
    } catch (error) {
      return res.status(400).send(error.message);
    }
    return res.status(200).send(contacts);
  }
);

export { router as listcontactsRouter };
