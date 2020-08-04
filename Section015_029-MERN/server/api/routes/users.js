const express = require('express');
const UserController = require('../controllers/UserController');
const requestValidations = require('../../common/requestValidations');

const userController = new UserController();
const router = express.Router();

router.post(
    '/', 
    requestValidations.createUserValidation,
    (req, res) => userController.Create(req, res)
);

module.exports = router;