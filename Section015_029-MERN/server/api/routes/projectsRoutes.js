const express = require('express');
const ProjectController = require('../controllers/ProjectController');
const {projectValidations} = require('../../common/validations');
const AuthMiddleware = require("../middleware/AuthMiddleware");

const authMiddleware = new AuthMiddleware()
const projectController = new ProjectController();
const router = express.Router();

router.post('/',
    (req, res, next) => authMiddleware.ValidateLogin(req, res, next), 
    projectValidations.createProject,
    (req, res) => projectController.Create(req, res)
);

router.get('/',
    (req, res, next) => authMiddleware.ValidateLogin(req, res, next),
    (req, res) => projectController.List(req, res)
);

module.exports = router;