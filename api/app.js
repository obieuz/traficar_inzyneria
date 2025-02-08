var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

let IndexRouter = require('./routes/index')
let CarsRouter = require("./routes/cars")
const UserRouter = require("./routes/users")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", IndexRouter);
app.use("/cars", CarsRouter);
app.use("/users", UserRouter);


module.exports = app;
