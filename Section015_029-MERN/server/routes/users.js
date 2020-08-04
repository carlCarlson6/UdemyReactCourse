const express = require('express');
const UserController = require('../controllers/UserController');

const userController = new UserController();

const router = express.Router();

router.post('/', (req, res) => userController.Create(req, res));

module.exports = router;