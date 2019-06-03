const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  quote: { type: String, default: "You have no quote" }
});

//mapping data in database to a js object
const User = mongoose.model("User", UserSchema);

module.exports = User;
