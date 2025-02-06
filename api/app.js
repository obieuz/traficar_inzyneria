var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();
let IndexRouter = require('./routes/index')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", IndexRouter);


module.exports = app;
