const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
 
 name: { type: String, required: true },
 
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_url: String,
  role: { type: String, required: true },
});

const User = mongoose.model("student" , StudentSchema);

module.exports = Student;