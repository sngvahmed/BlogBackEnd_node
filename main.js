var singelton = require('./config/singelton')();

singelton.server.use('/user', singelton.userController);

singelton.server.listen(3000);
console.log("server is listening on port 3000");