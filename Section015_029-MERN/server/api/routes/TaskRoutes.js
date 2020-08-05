const express = require('express');
const TaskController = require('../controllers/TaskController');
const {taskValidations} = require('../../common/validations');
const AuthMiddleware = require("../middleware/AuthMiddleware");

const authMiddleware = new AuthMiddleware()
const taskController = new TaskController();
const router = express.Router();

router.post('/',
    (req, res, next) => authMiddleware.ValidateLogin(req, res, next), 
    taskValidations.createTask,
    (req, res) => taskController.Create(req, res)
);

router.get('/',
    (req, res, next) => authMiddleware.ValidateLogin(req, res, next),
    (req, res) => taskController.List(req, res)
);

router.put('/:id',
    (req, res, next) => authMiddleware.ValidateLogin(req, res, next),
    //taskValidations.createTask,
    (req, res) => taskController.Update(req, res)
);

router.delete('/:id',
    (req, res, next) => authMiddleware.ValidateLogin(req, res, next),
    (req, res) => taskController.Delete(req, res)
);

module.exports = router;