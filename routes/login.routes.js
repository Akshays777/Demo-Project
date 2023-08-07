var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controllers');
const {body} = require('express-validator');

/* GET users listing. */

router.post('/login',userController.loginUser);

module.exports = router;