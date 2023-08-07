var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controllers');
const {body} = require('express-validator');

/* GET users listing. */
router.post('/create',
[
    body("Name")
    .notEmpty().withMessage("Name is required")
    .isAlpha().withMessage("Name must be in alphabets only"),
    body("Mobile")
    .notEmpty().withMessage("Mobile is required")
    .isLength({min:10,max:12}).withMessage("Please enter valid mobile number")
],userController.createUser);

router.post('/getAll',userController.getAll)

module.exports = router;
