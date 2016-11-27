var status = require('http-status');
var mongoose = require('mongoose');
var User = require('./user_schema');

var userDao = {

    getUser: function(errorCallback, successCallback) {

        User.find({ username: "sngv" }, function(error, user) {

            if (error) { errorCallback(status.INTERNAL_SERVER_ERROR, { error: error.toString() }); }

            if (!user) { errorCallback(status.NOT_FOUND); }

            successCallback(user);
        });
    }
}

module.exports = userDao;