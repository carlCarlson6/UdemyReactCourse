const ProjectServices = require("../../services/ProjectServices");
const {projectResponses, errorResponse} = require('../../common/res');
const {validationResult} = require('express-validator')

class ProjectController {
    constructor() {
        this.projectServices = new ProjectServices();
    }

    async Create(request, response) {
        try {

        }

        catch(error) {
            errorResponse(response, 'Error while creating a project', error);
        }
    }

    async List(request, response) { }

    async Delete(request, response) { }

}

module.exports = ProjectController