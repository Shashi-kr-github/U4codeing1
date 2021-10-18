const express = require('express');
const {body, validationResult} = require("express-validator");


const router = express.Router();

const User = require('../models/user.model')

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

  body("name").isLength({ min: 10 }).withMessage("name is requires"),

  body("email").isEmail().withMessage("must be valid email adress"),
  body("password").isLength({min: 4}).withMessage("must be valid password"),

  body("profile_url").isEmail().withMessage("must be valid url"),
  body("role").isLength({ min: 3 }).withMessage("role is required at least 3 caracter"),
 
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