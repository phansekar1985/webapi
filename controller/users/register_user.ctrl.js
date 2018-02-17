var express = require('express');
var router = express.Router();
var userModel = require('../../models/user.model');
var bcrypt = require('bcrypt');
var resposeToUser = require('../../shared/response');

//POST - Create user
module.exports = function (req, res) {
    //Check if user exists
    userModel.findOne({ email: req.body.email }, '', function (err, user) {
        if (err) {
            res.status(422).json(resposeToUser(false, err));
            return;
        }
        else if (user) {
            res.status(422).json(resposeToUser(false, 'User already exists!!'));
            return;
        } else {
            if (!req.body.email || !req.body.password) {
                res.status(422).json(resposeToUser(false, 'Email or password is empty!!'));
                return;
            }
        
            var user = new userModel({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
                userType: req.body.userType,
                isLocked: false
            })
        
            user.save(function (err, user) {
                if (!err) {
                    res.status(201).json(resposeToUser(true, 'Record created!!', { id: user._id }));
                } else {
                    res.json(resposeToUser(false, 'Error - ' + err));
                }
            });
        }
    });
}
