const express = require('express');
const userValidations = require('../../common/validations/userValidations');
const UserController = require('../controllers/UserController');

const userController = new UserController();
const router = express.Router();

router.post(
    '/',
    userValidations.login,
    (req, res) => userController.Login(req, res)
);

module.exports = router;