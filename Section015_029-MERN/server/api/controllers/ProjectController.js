const ProjectServices = require("../../services/ProjectServices");
const {projectResponses, errorResponse} = require('../../common/res');
const {validationResult} = require('express-validator');

class ProjectController {
    constructor() {
        this.projectServices = new ProjectServices();
    }

    async Create(request, response) {
        try {
            console.log(request.user);
            const projectToSave = {...request.body, creator: request.user.id}
            const projectSaved = await this.projectServices.AddProject(projectToSave);
            projectResponses.projectCreated(response, {project: projectSaved});
        }

        catch(error) {
            errorResponse(response, 'Error while creating a project', error);
        }
    }

    async List(request, response) { }

    async Delete(request, response) { }

}

module.exports = ProjectController