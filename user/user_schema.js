var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
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