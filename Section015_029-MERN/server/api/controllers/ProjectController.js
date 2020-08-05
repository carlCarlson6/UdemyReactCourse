const ProjectServices = require("../../services/ProjectServices");
const {projectResponses, errorResponse} = require('../../common/res');
const { validateRequest } = require("../../common/validations");

class ProjectController {
    constructor() {
        this.projectServices = new ProjectServices();
    }

    async Create(request, response) {
        try {
            validateRequest(request)

            const projectToSave = {...request.body, creator: request.user.id}
            const projectSaved = await this.projectServices.AddProject(projectToSave);
            projectResponses.projectCreated(response, {project: projectSaved});
        }

        catch(error) {
            errorResponse(response, 'Error while creating a project', error);
        }
    }

    async List(request, response) { 
        try {
            const projects = await this.projectServices.GetUserProjects(request.user.id);
            const projectsResponse = projects.map(project => {return {id: project._id, name: project.name}})
            projectResponses.projectsFound(response, projectsResponse);
        }

        catch(error) {
            errorResponse(response, 'Error while creating a project', error);
        }
    }

    async Delete(request, response) { }

}

module.exports = ProjectController