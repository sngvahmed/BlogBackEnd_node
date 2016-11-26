var status = require('http-status');

module.exports = function(singelton) {
    var app = {};

    app.getUser = function(errorCallback, successCallback) {

        singelton.User.find({ username: "sngv" }, function(error, user) {

            if (error) {
                errorCallback(status.INTERNAL_SERVER_ERROR, { error: error.toString() });
            }
            if (!user) {
                errorCallback(status.NOT_FOUND);
            }
            successCallback(user);
        });

    };


    return app;
}