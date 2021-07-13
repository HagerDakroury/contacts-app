import mongoose from "mongoose";

const Userchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: [{ type: String }],
});

const ContactSchema = new mongoose.Schema({
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export { Userchema, ContactSchema };
