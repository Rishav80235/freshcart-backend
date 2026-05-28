//===================================
//     Users
//===================================
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  phone: Number,
  role: { type: String, default: "user" },
});

module.exports = mongoose.model('Users', userSchema);