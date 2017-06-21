var express = require('express');
var bodyParser = require('body-parser');
var wagner = require('wagner-core');
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var schema = require('./user/user_schema');
var bluebird = require('bluebird');

module.exports = function() {
    var app = express();

    setupModels(mongoose, wagner);
    setupApp(app, wagner);

    function setupModels(mongoose, wagner) {
        mongoose.Promise = bluebird;
        var uri = 'mongodb://localhost:27017/blog';
        mongoose.connect(uri);
        var User = mongoose.model('User', schema, 'users');

        wagner.factory('User', function() {
            return User;
        });
    }

    function setupApp(app, wagner) {
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        var routeHandler = wagner.invoke(function(User) {
            return function(req, res) {
                User.find({ username: "sngv" }, function(error, doc) {
                    console.log(doc);
                    res.json({ "user": doc });
                });
            }
        });

        app.get('/user/:user', routeHandler)
    }

    // app.get('/', function(req, res) {
    //     res.send("Welcome :D");
    // })

    // app.get('/userinfo', function(req, res) {
    //     res.send("Hello World");
    // })


    return app;
}
