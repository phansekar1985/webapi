module.exports = function connectToDB() {
    var mongoose = require('mongoose');

    var config = require('../config');

    //Connection string
    var connectionStr = 'mongodb://' + config.db.url + '/' + config.db.table;

    //Connect to db
    mongoose.connect(connectionStr);

    var db = mongoose.connection;

    //Get status if its conneced to DB
    db.once('open', function () {
        console.log('connected to database');
    });
}

