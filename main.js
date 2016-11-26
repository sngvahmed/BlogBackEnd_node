var wagner = require('wagner-core');
var express = require('express');

var mongo = require('./config/mongo_init')(wagner);

var server = express();
server.use('/user', require('./user/user_controller')(wagner));

server.listen(3000);
console.log("server is listening on port 3000");