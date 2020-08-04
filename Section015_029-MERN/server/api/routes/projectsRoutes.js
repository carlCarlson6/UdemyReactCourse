const express = require('express');
const ProjectController = require('../controllers/ProjectController');
const projectValidations = require('../../common/validations/projectValidations');

const projectController = new ProjectController();
const router = express.Router();

router.post(
    '/', 
    projectValidations.createProject,
    (req, res) => projectController.Create(req, res)
);

module.exports = router;