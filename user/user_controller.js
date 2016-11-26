var express = require('express');
var status = require('http-status');

function userController(singelton) {

    var api = express.Router();

    api.get('/', function(req, res) {

        singelton.userDao.getUser(function(statusCode, msg) {
            return res.status(statusCode).json({ error: msg });
        }, function(result) {
            res.json({ "user": result });
        });

    });

    return api;
}

module.exports = userController;