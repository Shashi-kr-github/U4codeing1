const express = require('express');
const router = express.Router();
const Product = require('../model/product.model');

const authenticate = require('../middleware/authenticate')





router.get("/", authenticate, async function (req, res) {
  const products = await Product.find().lean().exec();

  return res.send(products);
});
module.exports = router;