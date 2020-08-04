const express = require('express');
const requestValidations = require('../../common/requestValidations');
const UserController = require('../controllers/UserController');

const userController = new UserController();
const router = express.Router();

router.post(
    '/',
    requestValidations.loginValidation,
    (req, res) => userController.Login(req, res)
);

module.exports = router;