var express = require('express');

var mongoInit = require('./config/mongo_init')();
var userController = require('./user/user_controller')();

var server = express();
server.use('/user', userController);
server.listen(3000);

console.log("server is listening on port 3000");