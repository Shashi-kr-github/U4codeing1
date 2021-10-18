const mongoose = require("mongoose");
const User = require("./user.model");

const StudentSchema = new mongoose.Schema({
  roll_number: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  batch: { type: String, required: true },
});

const Student = mongoose.model("student" , StudentSchema);

module.exports = Student;