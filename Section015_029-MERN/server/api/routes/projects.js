const express = require('express');
const ProjectController = require('../controllers/ProjectController');
const userValidations = require('../../common/validations/userValidations');

const projectController = new ProjectController();
const router = express.Router();

router.post(
    '/', 
    //requestValidations.createUserValidation,
    (req, res) => userController.Create(req, res)
);

module.exports = router;