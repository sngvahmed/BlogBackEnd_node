var mongodb = require('mongodb');
var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.Promise = require('bluebird');

var uri = 'mongodb://localhost:27017/blog';

mongoose.connect(uri);

var User = mongoose.model('User', schema, 'users');

var user = new User({
    name: "Ahmed Nasser",
    email: "ahmed@live.com"
})

// User.remove({}, function(error) {
//     if (error) {
//         console.log("failed with remove");
//         process.exit(1);
//     }
// });

user.save(function(error) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
});

User.find({ email: "ahmed@live.com" }, function(error, doc) {
    if (error) {
        console.log("error", error);
        process.exit(1);
    }
    console.log(JSON.stringify(doc));
    process.exit(0);
});