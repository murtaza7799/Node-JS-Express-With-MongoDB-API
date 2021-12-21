// App Controller
var expressLayouts = require("express-ejs-layouts");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// middleware that use  to log Http req  and errors
var logger = require('morgan');
// assign routes
var indexRouter = require('./routes/index');

var bodyParser = require("body-parser");



// use express
var app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));


// view engine setup 
// here we use ejs view engine
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('layout', './layout')
app.set('view engine', 'ejs');


// log req in console 
app.use(logger('dev'));
// a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
//we NEED express.json() and express.urlencoded() for POST and PUT request and not for Delete and get request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api/public/products", require("./routes/api/public/products"));
app.use("/api/products", require("./routes/api/products"));
//for routes
app.use('/', indexRouter);
app.get('', (req, res) => {
  res.render('index', { title: 'Home Page'})
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
