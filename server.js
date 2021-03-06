'use strict';

var express = require('express'),
routes = require('./app/routes/index.js'),
mongoose = require('mongoose'),
passport = require('passport'),
session = require('express-session'),
bodyParser = require('body-parser'),
multer  = require('multer');

var app = express();

require('dotenv').load();

console.log(process.env);
var mongoURI = process.env.MONGOLAB_URI || process.env.MONGO_URI;

mongoose.connect(mongoURI);

app.use(bodyParser());
app.use(multer({ dest: './uploads/'}).single('uploadedfile'));

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});