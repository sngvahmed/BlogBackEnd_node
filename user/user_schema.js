var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = new schema({
    username: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: Array,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: Array,
        required: true
    },
    address: {
        type: String
    }
})

var User = mongoose.model('User', userSchema);
module.exports = User;