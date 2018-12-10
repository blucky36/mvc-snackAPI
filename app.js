const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const uuid = require('uuid/v4')

// const indexRouter = require('./routes/index');
const snacksRouter = require('./mvc/routes/snacks');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/snacks', snacksRouter);

module.exports = app;
