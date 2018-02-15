//Get all the dependency
var express = require('express');
var mongoose = require('mongoose');

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

//Listen on '/' route
app.use('/', userRoute);

app.listen(port, function () {
    console.log('listening on port ' + port);
});
