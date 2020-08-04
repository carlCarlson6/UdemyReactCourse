const ProjectServices = require("../../services/ProjectServices");
const projectResponses = require('../../common/projectResponses');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');

class ProjectController {
    constructor() {
        this.projectServices = new ProjectServices();
    }

    async Create(request, response) {

    }

    async Delete(request, response) {

    }

}

module.exports = UserController