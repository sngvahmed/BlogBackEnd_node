var status = require('http-status');
var mongoose = require('mongoose');
var User = require('./user_schema');

module.exports = function() {
    var app = {};

    app.getUser = function(errorCallback, successCallback) {

        User.find(function(error, user) {

            if (error) {
                errorCallback(status.INTERNAL_SERVER_ERROR, { error: error.toString() });
            }
            if (!user) {
                errorCallback(status.NOT_FOUND);
            }
            successCallback(user);
        });
    };


    return app;
}