// App Controller

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// middleware that use  to log Http req  and errors
var logger = require('morgan');
// assign routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// use express
var app = express();

// view engine setup 
// here we use ejs view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// log req in console 
app.use(logger('dev'));
// a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
//we NEED express.json() and express.urlencoded() for POST and PUT request and not for Delete and get request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//for routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
