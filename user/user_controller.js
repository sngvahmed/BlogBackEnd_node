var express = require('express');
var status = require('http-status');
var userDao = require('./user_dao');

var userController = {
    self: this,
    api: express.Router(),

    getUser: function(req, res) {
        userDao.getUser(function(statusCode, msg) {
            return res.status(statusCode).json({ error: msg });
        }, function(result) {
            res.json({ "user": result });
        });

    },
    constructor: function() {
        userController.api.get('/', userController.getUser);
    }
}

userController.constructor();

module.exports = userController;