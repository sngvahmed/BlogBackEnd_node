var express = require('express');
var status = require('http-status');
var userDao = require('./user_dao');

function userController(wagner) {

    var api = express.Router();

    var getUserId = wagner.invoke(function(User) {

        return function(req, res) {
            console.log("reach");
            User.find({ username: "sngv" }, function(error, user) {
                console.log(user);
                if (error) {
                    return res.status(status.INTERNAL_SERVER_ERROR).json({ error: error.toString() });
                }

                if (!user) {
                    return res.status(status.NOT_FOUND).json({ error: 'user not found' });
                }
                res.json({ "user": doc });
            });
        }
    });

    api.get('/', wagner.invoke(function(User) {

        return function(req, res) {

            User.find({ username: "sngv" }, function(error, user) {
                console.log(user);
                if (error) {
                    return res.status(status.INTERNAL_SERVER_ERROR).json({ error: error.toString() });
                }

                if (!user) {
                    return res.status(status.NOT_FOUND).json({ error: 'user not found' });
                }
                res.json({ "user": user });
            });
        }
    }));

    return api;
}

module.exports = userController;