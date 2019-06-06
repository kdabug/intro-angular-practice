const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost:27017/intro-angulardb")
  .then(() => console.log("Mongoose is up"));

const User = require("./models/users");

app.use(bodyParser.json());

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const resp = await User.findOne({ email, password });
  if (!resp) {
    //user login is incorrect
    console.log("incorrect details");
  } else {
    // make a session and set user to logged in
    console.log("login event is happening");
  }
  res.send("k");
});
app.post("/api/register", async (req, res) => {
  //store this data on database
  console.log("app.post req.body", req.body);
  const { email, password } = req.body; //destructured
  const user = new User({ email, password });

  const result = await user.save();
  console.log("app.post result", result);
  res.json(result);
  //Usermodel.save({});
});

app.listen(1234, () => console.log("Server is listening at 1234"));
