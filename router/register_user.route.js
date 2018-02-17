var express = require('express');
var router = express.Router();
var userCtrl = require('../controller/users/create_user.ctrl');

//POST - Create user
module.exports = router.post('/user/register', userCtrl);