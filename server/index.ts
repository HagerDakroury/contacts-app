import express from "express";
import cookieParser from "cookie-parser";

import { signupRouter } from "./src/routes/signup";
import { loginRouter } from "./src/routes/login";
import { newcontactRouter } from "./src/routes/new";
import { editcontactRouter } from "./src/routes/edit";
import { deletecontactRouter } from "./src/routes/delete";
import { listcontactsRouter } from "./src/routes/list";
import { connectDb } from "./src/models/connection";
const path = require("path");

const cors = require("cors");

const port = 5005;

const app = express();
connectDb().then(() => {
  // eslint-disable-next-line no-console
  console.log("MongoDb connected!!");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.options("*", cors());

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(signupRouter);
app.use(loginRouter);
app.use(newcontactRouter);
app.use(editcontactRouter);
app.use(deletecontactRouter);
app.use(listcontactsRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
