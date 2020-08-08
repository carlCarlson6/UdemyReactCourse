const express = require('express');
const UserController = require('../controllers/UserController');
const {userValidations} = require('../../common/validations');
const AuthMiddleWare = require('../middleware/AuthMiddleware');

const userController = new UserController();
const authMiddleware = new AuthMiddleWare();

const router = express.Router();

router.post('/',
    userValidations.login,
    (req, res) => userController.Login(req, res)
);
router.get('/',
    (req, res, next) => authMiddleware.ValidateLogin(req, res, next),
    (req, res) => userController.GetAuthenticatedUser(req, res)
);

module.exports = router;