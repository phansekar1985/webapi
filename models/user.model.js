var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    },
    isLocked: Boolean
});

var userModel = mongoose.model('users', userSchema);
module.exports = userModel;