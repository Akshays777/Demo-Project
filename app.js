var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const db = require('./model/index');
const loginRouter = require('./routes/login.routes');
const middleware = require('./middleware/jwt.middleware');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.sequelize.sync({});

app.use('/', indexRouter);
app.use('/users',middleware.checkToken, usersRouter);
app.use('/user',middleware.checkToken, loginRouter);

module.exports = app;
