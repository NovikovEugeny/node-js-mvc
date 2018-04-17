const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

app.use('/', router);
app.listen(port);
console.log('server started on the port: ' + port);

//import all controllers
const userController = require('../controller/userController');

//describe all routers
router.get('/users', userController.findAllUsers);
router.get('/user/:id', userController.findUserById);
