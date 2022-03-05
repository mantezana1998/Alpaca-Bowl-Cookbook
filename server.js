var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

dogstatsd.increment('page.views')

require('dotenv').config();

var app = express();


require('./config/database');
require('./config/passport');


var indexRoutes = require('./routes/index');
var cookbookRoutes = require('./routes/cookbook');
var reviewRoutes = require('./routes/review');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(function (req, res, next) {
  res.locals.user = req.user; 
  next();
});

app.use('/', indexRoutes);
app.use('/cookbook', cookbookRoutes);
app.use('/', reviewRoutes);


app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
