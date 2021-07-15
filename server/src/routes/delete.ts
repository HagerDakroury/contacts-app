import express from "express";
import { Contact, User } from "../models/model";
import { body, validationResult } from "express-validator";
import { verifyToken } from "../utils/verifyToken";

const router = express.Router();

router.post(
  `/delete`,
  [
    body("_id").not().isEmpty().withMessage("id is required"),
    body("first").not().isEmpty().withMessage("First name is required"),
    body("last").not().isEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Email not Valid"),
  ],

  async (req: any, res: any) => {
    //validation errors handling
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send(errors.array({ onlyFirstError: true })[0].msg);
    }

    const { _id, first, last, email } = req.body;
    const token = req.header("Authorization")?.split(" ")[1];

    //verifying the user's token
    const username = verifyToken(token);
    if (username == "Invalid") {
      return res.status(400).send("Invalid user!");
    }
    let contacts: any = [];
    let contactsId: any = [];

    try {
      // deleting the contact
      await Contact.findOneAndDelete({ _id: _id });

      //getting all the user's contacts after delete
      const user = await User.findOne({ username: username });
      if (user) {
        for (const contact of user.contacts) {
          if (contact == _id) {
            continue;
          }
          let c = await Contact.findById(contact);
          contacts.push(c);
          contactsId.push(contact);
        }
        user.contacts = contactsId;
        await user.save();
      } else return res.status(400).send("Contact is not deleted");
    } catch (error) {
      return res.status(400).send(error.message);
    }
    return res.status(200).send(contacts);
  }
);

export { router as deletecontactRouter };
