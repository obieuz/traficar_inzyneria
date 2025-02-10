var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

const IndexRouter = require('./routes/index');
const CarsRouter = require("./routes/cars");
const UserRouter = require("./routes/users");
const RegionsRouter = require("./routes/regions");
const OrdersRouter = require("./routes/orders");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", IndexRouter);
app.use("/cars", CarsRouter);
app.use("/users", UserRouter);
app.use("/regions",RegionsRouter);
app.use("/orders",OrdersRouter);


module.exports = app;
