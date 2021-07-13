import mongoose from "mongoose";

// An interface to describe the types of a user attributes
interface UserAttributes {
  username: string;
  password: string;
  contacts: string[];
}

// An interface that keeps tracks of any values added by mongo
interface UserDocument extends mongoose.Document {
  username: string;
  password: string;
  contacts: string[];
}

// An interface to describe the types of a contact attributes
interface ContactAttributes {
  first: string;
  last: string;
  email: string;
}

// An interface that keeps tracks of any values added by mongo
interface ContactDocument extends mongoose.Document {
  first: string;
  last: string;
  email: string;
}

export { UserAttributes, UserDocument, ContactAttributes, ContactDocument };
