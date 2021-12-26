var express = require("express");
var router = express.Router();
var Product = require("../models/Product");
var User = require("../models/Users");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
/* GET home page. */

router.get("/", async function (req, res, next) {
  let products = await Product.find();
  
  return res.render("site/homepage", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/products", async function (req, res, next) {
  let products = await Product.find();
  console.log(products[1].name);
  return res.render("site/products", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/signup", function (req, res, next) {
  return res.render("site/signup");
});
router.get("/login", function (req, res, next) {
  return res.render("site/login");
});
router.get("/aboutus", function (req, res, next) {
  return res.render("site/aboutus");
});
router.get("/cart", function (req, res, next) {
  return res.render("site/cart");
});
// login form handler
router.post("/login", async function (req, res, next) {
  console.log(req.body);
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (!user) {
    console.log("User with this email not present");

    //req.flash("danger", "User with this email not present");
    return res.redirect("site/login");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    req.session.user = user;
    console.log("User signin");
    return res.redirect("/");
  } else {
    console.log("invalid PAssword");

    //req.flash("danger", "Invalid Password");
    return res.redirect("/login");
  }
});
// handel login form
router.post("/signup", async function (req, res, next) {
  console.log("signup req");
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log("User Already registered");

   // req.flash("danger", "User with given email already registered");
    return res.redirect("site/signup");
  }
  user = new User(req.body);
  console.log(req.body)
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();
  return res.render("site/login");
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
