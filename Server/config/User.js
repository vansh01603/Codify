const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email_id: String, 
  password: String,
});

module.exports = mongoose.model("test2", UserSchema); 

