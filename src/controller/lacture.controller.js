const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();



const Lacture = require("../models/lacture.model");
const Student = require("../models/student.model");
const User = require("../models/user.model");

const { check } = require("express-validator");

// router.post(
//   "/user",
//   check("email").custom((value) => {
//     return User.findByEmail(value).then((user) => {
//       if (user) {
//         return Promise.reject("E-mail already in use");
//       }
//     });
//   }),
//   check("password").custom((value, { req }) => {
//     if (value !== req.body.passwordConfirmation) {
//       throw new Error("Password confirmation is incorrect");
//     }
//   }),
//   (req, res) => {
//     // Handle the request somehow
//   }
// );

router.post(
  "/",

  body("title").isLength({ min: 3 }).withMessage("tile  is required"),

  body("instructor").isObject().withMessage("must be authenticate instructor"),
  body("batch").isLength({ min: 4 }).withMessage("must be valid batch"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ data: errors.array() });
    }
    const user = await User.create(req.body);
    return res.status(201).json({ data: user });
  }
);

module.exports = router;
