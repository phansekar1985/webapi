var express = require('express');
var router = express.Router();
var userModel = require('../../../models/user.model');

router.get('/', function (req, res) {

    userModel.find({}, function (err, users) {
        if (!err) {
            res.jsonp(users);
        } else {
            res.send(err);
        }
    });
})

router.get('/:name', function (req, res) {

    userModel.find({name: req.params.name}, function (err, users) {
        if (!err) {
            res.jsonp(users);
        } else {
            res.send(err);
        }
    });
})

module.exports = router;