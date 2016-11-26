var mongoose = require('mongoose');
var mongodb = require('mongodb');
var bluebird = require('bluebird');
var schema = require('./../user/user_schema');

module.exports = function(wagner) {

    function setUp() {
        console.log("init connection of mongoose");

        mongoose.Promise = bluebird;
        var uri = 'mongodb://localhost:27017/blog';
        mongoose.connect(uri);
    }

    function setupUserModel() {
        console.log("init User Model");

        wagner.factory('User', function() {
            return mongoose.model('User', schema, 'users');;
        });
    }

    setUp();
    setupUserModel();

    return mongoose;
}