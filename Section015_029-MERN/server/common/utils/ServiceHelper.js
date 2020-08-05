class ServiceHelper {
    constructor(projectServices, taskServices) {
        this.projectServices = projectServices
        this.taskServices = taskServices
    }

    async FindProjectAndOwnership(request, response) {
        const project = await this.projectServices.FindProjectById(request.body.projectId)   
        if(!project) {
            projectResponses.projectNotFound(response);
            return false;
        }
                
        if(!this.projectServices.ValidateUserProjectOwnership(request.user.id, project.creator)) {
            projectResponses.projectNotOwned(response);
            return false;
        }
        
        return true;
    }

    async FindProjectOwnershipAndFindTask(request, response) {
        if(!(await this.FindProjectAndOwnership(request, response))) {
            return false;
        }

        if(!(await this.taskServices.FindTaskById(request.params.id))) {
            taskResponses.taskNotFound(response);
            return false;
        }

        return true;
    }
}

module.exports = ServiceHelper;