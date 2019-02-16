var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = express.Router();

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var exploreRouter = require('./routes/explore');
var learnRouter = require('./routes/learn');

// error handler


router.use('/', indexRouter);
router.use('/about', aboutRouter);
router.use('/explore', exploreRouter);
router.use('/learn', learnRouter);

// catch 404 and forward to error handler


module.exports = router;