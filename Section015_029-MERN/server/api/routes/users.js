const express = require('express');
const UserController = require('../controllers/UserController');
const userValidations = require('../../common/validations/userValidations');

const userController = new UserController();
const router = express.Router();

router.post(
    '/', 
    userValidations.createUser,
    (req, res) => userController.Create(req, res)
);

module.exports = router;