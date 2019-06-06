const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "alskdgasdhgalksdjf213sdkfjsldfj",
    saveUninitialized: false, //cookie is not created for someone who is not authrenticated.
    resave: false //will not resave the cookie when no change is made
  })
);

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
    res.json({
      success: false,
      massage: "incorrect details"
    });
  } else {
    // make a session and set user to logged in
    console.log("login event is happening");
    res.json({
      success: true,
      massage: "correct details"
    });
    req.session.user = email;
  }
  res.send("k");
});
app.post("/api/register", async (req, res) => {
  //store this data on database
  console.log("app.post req.body", req.body);

  const { email, password } = req.body; //destructured

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.json({
      success: false,
      massage: "email already in use"
    });
    return;
  }
  const user = new User({ email, password });

  const result = await user.save();
  console.log("app.post result", result);
  res.json({
    success: true,
    massage: "successfully registed"
  });
  //Usermodel.save({});
});

app.get("./data", (req, res) => {
  //console.log("user is =>", req.session.user);
  res.send("user is =>" + req.session.user);
});

app.listen(1234, () => console.log("Server is listening at 1234"));
