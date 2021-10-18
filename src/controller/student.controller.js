const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();
const Student = require("../models/student.model");
//const User = require("../models/users.model");

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

  body(" roll_number").isLength({ min: 3 }).withMessage("role is requires"),

  body("user").isObject().withMessage("must be valid user"),
  body("batch").isLength({ min: 4 }).withMessage("must be valid password"),

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
