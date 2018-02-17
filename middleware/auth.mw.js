var jwt = require('jsonwebtoken');
var responseToUser = require('../shared/response');
var config = require('../config');

module.exports = function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.authKey, function (err, decoded) {
            if (err) {
                return res.json(responseToUser(false, 'Failed to authenticate token.'));
            } else {
                //if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send(responseToUser(false, 'No token provided.'));
    }
}