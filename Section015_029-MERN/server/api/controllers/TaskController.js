const TaskServices = require("../../services/TaskServices");
const { taskResponses, projectResponses, errorResponse } = require('../../common/res');
const { validateRequest } = require("../../common/validations");
const ProjectServices = require("../../services/ProjectServices");


class TaskController {
    constructor() {
        this.taskServices = new TaskServices();
        this.projectServices = new ProjectServices()
    }

    async Create(request, response) {
        try {
            validateRequest(request);

            if(!(await this.FindProjectAndOwnership(request, response)))
                return;

            const task = await this.taskServices.CreateTask(request.body)
            taskResponses.taskCreated(response, {task})
        } 

        catch (error) {
            errorResponse(response, 'Error while creating the task', error);
        }
    }

    async List(request, response) {
        try {
            validateRequest(request);

            if(!(await this.FindProjectAndOwnership(request, response)))
                return;
            
            const tasks = await this.taskServices.FindProjectTasks(request.body.projectId);
            taskResponses.tasksFound(response, tasks);
        } 
        
        catch (error) {
            errorResponse(response, 'Error while creating the task', error);
        }
    }
    
    async Update(request, response) {        
        try {
            validateRequest(request);

            if(!(await this.FindProjectOwnershipAndFindTask(request, response)))
                return;

            const newTask = this.taskServices.ConstructNewTask(request.body);
            const updatedTask = await this.taskServices.UpdateTask(request.params.id, newTask);
            taskResponses.taskUpdated(response, {task:updatedTask});
        } 
        
        catch (error) {
            errorResponse(response, 'Error while creating the task', error);
        }
    }

    async Delete(request, response) {
        try {
            validateRequest(request);

            await this.taskServices.DeleteTask(request.params.id);
            taskResponses.taskDeleted(response);

        }
        
        catch (error) {
            errorResponse(response, 'Error while creating the task', error);
        }
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

module.exports = TaskController;