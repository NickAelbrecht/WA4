var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

var router = express.Router();
mongoose.connect("mongodb://localhost/clubdb");

require("./models/Club");
require("./models/Sport");
require("./models/Sport");


require('./config/passport');

var index = require("./routes/index");
var users = require("./routes/users");
let cors = require("cors");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());

app.use("/", index);
app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

router.get("/API/club/", function(req, res, next) {
  res.send("process the request here");
});

passport.use(new LocalStrategy(
  function (username, password, done) {
      User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
          }
          if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user);
      });
  }));

module.exports = app;
