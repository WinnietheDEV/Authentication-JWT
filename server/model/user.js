const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide username"],
    trim: true,
    minlength: 4,
    maxlength: 20,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "please provide email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "email is invalid",
    ],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "please provide password"],
  },
});

module.exports = mongoose.model("user", UserSchema);
