const mongoose = require("mongoose");
const Student = require("./student.model");

const LactureSchema = new mongoose.Schema({
 title: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },

  batch: { type: String, required: true },
});

const Lacture = mongoose.model("lacture", LactureSchema);

module.exports = Lacture;
