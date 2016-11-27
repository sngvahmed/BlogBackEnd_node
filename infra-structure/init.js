var mongodb = require('mongodb');
var mongoose = require('mongoose');
var User = require('./main/user/user_schema');

mongoose.Promise = require('bluebird');

var uri = 'mongodb://localhost:27017/blog';

mongoose.connect(uri);

var user = new User({
    name: "Ahmed Nasser",
    username: "sngv",
    email: [
        "ahmed_nasser1993@live.com",
        "ahmednasser1993@live.com",
        "ahmednasser1993@gmail.com",
        "ahmednasser1993@protonmail.com"
    ],
    admin: true,
    phoneNumber: ["01002075502"],
    address: "1 el manar street takseem fesal giza "
})

User.remove({}, function(error) {
    if (error) {
        console.log("failed with remove");
        process.exit(1);
    }
    user.save(function(error) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
        console.log("save successfull", user);

        User.find({}, function(err, usr) {
            if (err) throw err;

            console.log("done find with ", usr);
            process.exit(0);

        });

    });
});