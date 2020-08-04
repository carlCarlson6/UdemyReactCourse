const ProjectServices = require("../../services/ProjectServices");
const {projectResponses, errorResponse} = require('../../common/res');
const {validationResult} = require('express-validator')

class ProjectController {
    constructor() {
        this.projectServices = new ProjectServices();
    }

    async Create(request, response) {
        try {
            console.log('desde controller', request);
            const {_id, name, createdAt} = await this.projectServices.AddProject(request.body);
            projectResponses.projectCreated(response, {project: {_id, name, createdAt}});
        }

        catch(error) {
            errorResponse(response, 'Error while creating a project', error);
        }
    }

    async List(request, response) { }

    async Delete(request, response) { }

}

module.exports = ProjectController