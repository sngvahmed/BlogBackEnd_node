var express = require('express');
var status = require('http-status');
var userDao = require('./user_dao')();

function userController() {

    var api = express.Router();

    api.get('/', function(req, res) {
        console.log("here");
        userDao.getUser(function(statusCode, msg) {
            return res.status(statusCode).json({ error: msg });
        }, function(result) {
            res.json({ "user": result });
        });

    });

    return api;
}

module.exports = userController;