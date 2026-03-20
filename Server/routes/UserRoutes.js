const express = require('express');
const router = express.Router(); // 
const userController = require('../controller/userSignup');


router.post('/', userController.sendData);

router.post('/login', userController.loginUser); 

module.exports = router;


