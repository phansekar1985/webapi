var express = require('express');
var router = express.Router();
var userModel = require('../../models/user.model');

router.post('/', function (req, res) {
    var user = new userModel({
        name: req.body.name
    })

    user.save(function (err, user) {
        if (!err) {
            res.status(200).jsonp('Record created!! Id  - ' + user._id);
        } else {
            res.status(400).jsonp('Error - ' + err);
        }
    });
});

module.exports = router;