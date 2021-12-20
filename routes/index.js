
var express = require('express');
var Product = require("../models/Product");
var router = express.Router();
const mongoose = require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

const silence = new Product({ name: 'Silence' });
async function main() {
  await mongoose.connect('mongodb://localhost:27017/sp19-bse').then(() =>console.log("Connected")).catch(err => console.log("Could not connect to Mongo"));
  try {
    await silence.save();
    
  } catch (error) {
    response.status(500).send(error);
  }

}
main().catch(err => console.log(err));
 

module.exports = router;
