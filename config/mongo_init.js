var mongoose = require('mongoose');

var mong = {
    setUp: function() {
        console.log("init connection of mongoose");

        mongoose.Promise = require('bluebird');
        var uri = 'mongodb://localhost:27017/blog';
        mongoose.connect(uri);
    },
    mongoose: mongoose
}

mong.setUp();

module.exports = mong;