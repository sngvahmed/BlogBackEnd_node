var mongoose = require('mongoose');

module.exports = function() {
    var mongo = {};

    function setUp() {
        console.log("init connection of mongoose");

        mongoose.Promise = require('bluebird');
        var uri = 'mongodb://localhost:27017/blog';
        mongoose.connect(uri);
    }

    setUp();

    return mongo;
}