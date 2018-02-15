var express = require('express');
var router = express.Router();
var userModel = require('../models/user.model');

router.get('/users', function (req, res) {

    userModel.find({}, function (err, users) {
        if (!err) {
            res.jsonp(users);
        }
    });
})

module.exports = router;