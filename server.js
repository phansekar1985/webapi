//Get all the dependency
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Get express instance 
var app = express();

//Set PORT
var port = process.env.PORT || 4000;

var config = require('./db/config');
var connectionStr = 'mongodb://' + config.username + ':' + config.password + '@' + config.database.url + '/' +
    config.database.table;

//Connect to db
mongoose.connect(connectionStr);
var db = mongoose.connection;
db.once('open', function() {
    console.log('connected to database');
});

//Router
var userRoute = require('./routes/user.routes');

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Routes
app.use('/users', userRoute);

app.listen(port, function () {
    console.log('listening on port ' + port);
});
