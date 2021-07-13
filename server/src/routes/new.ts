import express from "express";
import { Contact, makeContact, User } from "../models/model";
import { body, validationResult } from "express-validator";
import { verifyToken } from "../utils/verifyToken";
import { ContactDocument } from "../models/interfaces";

const router = express.Router();

router.post(
  `/new`,
  [
    body("first").not().isEmpty().withMessage("First name is required"),
    body("last").not().isEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Email not Valid"),
  ],

  async (req: any, res: any) => {
    //validation errors handling
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.send(errors.array({ onlyFirstError: true })[0].msg);
    }

    const { first, last, email } = req.body;
    const token = req.header("Authorization")?.split(" ")[1];

    //verifying the user's token
    const username = verifyToken(token);
    if (username == "Invalid") {
      return res.status(400).send("Invalid user!");
    }
    let contacts: any = [];

    try {
      // making a new meeting and saving it into the database
      const contact = await makeContact({
        first,
        last,
        email,
      });
      await contact.save();

      const id = contact._id;

      const user = await User.findOne({ username: username });
      if (user) {
        user.contacts.push(id);
        await user.save();
        for (const contact of user.contacts) {
          let c = await Contact.findById(contact);
          contacts.push(c);
        }
      } else return res.status(400).send("Contact is not added");
    } catch (error) {
      return res.status(400).send(error.message);
    }
    return res.status(200).send(contacts);
  }
);

export { router as newcontactRouter };
