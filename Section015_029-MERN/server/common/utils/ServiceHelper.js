const {projectResponses} = require('../res');

class ServiceHelper {
    constructor(projectServices, taskServices) {
        this.projectServices = projectServices
        this.taskServices = taskServices
    }

    async FindProjectAndOwnership(user, projectId, response) {
        const project = await this.projectServices.FindProjectById(projectId)   
        if(!project) {
            projectResponses.projectNotFound(response);
            return false;
        }
                
        if(!this.projectServices.ValidateUserProjectOwnership(user.id, project.creator)) {
            projectResponses.projectNotOwned(response);
            return false;
        }
        
        return true;
    }

    async FindProjectOwnershipAndFindTask(user, projectId, taskId, response) {
        if(!(await this.FindProjectAndOwnership(user, projectId))) {
            return false;
        }

        if(!(await this.taskServices.FindTaskById(taskId))) {
            taskResponses.taskNotFound(response);
            return false;
        }

        return true;
    }
}

module.exports = ServiceHelper;