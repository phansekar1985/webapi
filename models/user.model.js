var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    name: String
});

var userModel = mongoose.model('users', userSchema);
module.exports = userModel;