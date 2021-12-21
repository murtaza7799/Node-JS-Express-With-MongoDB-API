
var express = require("express");
var router = express.Router();
var Product = require("../models/Product");
const mongoose = require('mongoose');
/* GET home page. */

router.get("/", async function (req, res, next) {
  let products = await Product.find();
  console.log(products[1].name);
  return res.render("site/homepage", {
    pagetitle: "Awesome Products",
    products,
  });
});


// const silence = new Product({ name: 'Silence' });
// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/sp19-bse').then(() =>console.log("Connected")).catch(err => console.log("Could not connect to Mongo"));
//   try {
//     await silence.save();
    
//   } catch (error) {
//     response.status(500).send(error);
//   }

// }
// main().catch(err => console.log(err));
 

module.exports = router;
