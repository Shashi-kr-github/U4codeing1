const mongoose = require("mongoose");
const User = require("./models/users.model");

const StudentSchema = new mongoose.Schema({
  roll_number: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  batch: { type: String, required: true },
});

const User = mongoose.model("student" , StudentSchema);

module.exports = Student;