var mongoose = require('mongoose');
var express = require('express');

module.exports = function() {
    var app = {};

    app.userSchema = require('./../user/user_schema');
    app.mongoInit = require('./mongo_init')(mongoose);
    app.userDao = require('./../user/user_dao')(app);
    app.userController = require('./../user/user_controller')(app);
    app.server = express();
    app.User = mongoose.model('User', app.userSchema, 'users');


    return app;
}