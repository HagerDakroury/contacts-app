import mongoose from "mongoose";
import {
  UserAttributes,
  UserDocument,
  ContactAttributes,
  ContactDocument,
} from "./interfaces";
import { Userchema, ContactSchema } from "./schema";
import { PasswordHasher } from "../utils/passHash";

const User = mongoose.model<UserDocument>("User", Userchema);

// making sure the passed user attributes confronts with the expected types
// and hashing the passwords
const makeUser = async (attributes: UserAttributes) => {
  //hashing the password before storing it in the db
  const password = await PasswordHasher.toHash(attributes.password);

  return new User({ ...attributes, password });
};

const Contact = mongoose.model<ContactDocument>("Contact", ContactSchema);

// making sure the passed contact attributes confronts with the expected types
const makeContact = async (attributes: ContactAttributes) => {
  //hashing the password before storing it in the db

  return new Contact(attributes);
};

export { User, makeUser, Contact, makeContact };
