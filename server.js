//Get all the dependency
var express = require('express');
var bodyParser = require('body-parser');

var config = require('./config');

//Get Routes
var registerUserRoute = require('./router/register_user.route');

//Get Shared Reference
var connectToDB = require('./shared/connect_to_DB');

//Get express instance 
var app = express();

//Set PORT
var port = process.env.PORT || config.defaultPort;

//Connect to Mongodb
connectToDB();

//Get Auth
var auth = require('./middleware/auth.mw');

//Middleware
////Set BodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

////set Routes 
//////Register User
app.use('/api', registerUserRoute);

////Auth
app.use(auth);

app.listen(port, function () {
    console.log('listening on port ' + port);
});
