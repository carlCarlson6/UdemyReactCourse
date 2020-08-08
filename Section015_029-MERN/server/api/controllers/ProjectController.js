const ProjectServices = require("../../services/ProjectServices");
const {projectResponses, errorResponse} = require('../../common/res');
const { validateRequest } = require("../../common/validations");
const ServiceHelper = require('../../common/utils/ServiceHelper');

class ProjectController {
    constructor() {
        this.projectServices = new ProjectServices();
        this.serviceHelper = new ServiceHelper(this.projectServices, null);
    }

    async Create(request, response) {
        try {
            validateRequest(request)

            const projectToSave = {...request.body, creator: request.user.id}
            const projectSaved = await this.projectServices.AddProject(projectToSave);

            projectResponses.projectCreated(response, {project: projectSaved});
        }

        catch(error) {
            errorResponse(response, `Error while creating a project: ${error.toString()}`, error);
        }
    }

    async List(request, response) { 
        try {
            const projects = await this.projectServices.GetUserProjects(request.user.id);
            const projectsResponse = projects.map(project => {return {id: project._id, name: project.name}})

            projectResponses.projectsFound(response, projectsResponse);
        }

        catch(error) {
            errorResponse(response, `Error while listing a project: ${error.toString()}`, error);
        }
    }

    async Update(request, response) {
        try {
            validateRequest(request);
            
            if(!(await this.serviceHelper.FindProjectAndOwnership(request, response)))
                return;

            project = await this.projectServices.UpdateProject(request.params.id, {name: request.body.name})
            projectResponses.projectUpdated(response, {project})
        }

        catch(error) {
            errorResponse(response, `Error while updating a project: ${error.toString()}`, error);
        }
    }

    async Delete(request, response) { 
        try {
            validateRequest(request);
            
            if(!(await this.serviceHelper.FindProjectAndOwnership(request, response)))
                return;

            await this.projectServices.DeleteProject(request.params.id);
            projectResponses.projectDeleted(response);
        }

        catch(error) {
            errorResponse(response, `Error while updating a project: ${error.toString()}`, error);
        }
    }

}

module.exports = ProjectController