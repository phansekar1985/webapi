var express = require('express');
var router = express.Router();
var registerUserCtrl = require('../controller/users/register_user.ctrl');

//POST - Create user
module.exports = router.post('/user/register', registerUserCtrl);