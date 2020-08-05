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

            const project = await this.projectServices.FindProjectById(request.body.projectId)   
            if(!project)
                return projectResponses.projectNotFound(response);

            if(!this.projectServices.ValidateUserProjectOwnership(request.user.id, project.creator))
                return projectResponses.projectNotOwned(response);

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

            const project = await this.projectServices.FindProjectById(request.body.projectId)   
            if(!project)
                return projectResponses.projectNotFound(response);

            if(!this.projectServices.ValidateUserProjectOwnership(request.user.id, project.creator))
                return projectResponses.projectNotOwned(response);

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

            const project = await this.projectServices.FindProjectById(request.body.projectId)   
            if(!project)
                return projectResponses.projectNotFound(response);

            if(!this.projectServices.ValidateUserProjectOwnership(request.user.id, project.creator))
                return projectResponses.projectNotOwned(response);

            if(!(await this.taskServices.FindTaskById(request.params.id)))
                return taskResponses.taskNotFound(response);

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

            const project = await this.projectServices.FindProjectById(request.body.projectId)   
            if(!project)
                return projectResponses.projectNotFound(response);

            if(!this.projectServices.ValidateUserProjectOwnership(request.user.id, project.creator))
                return projectResponses.projectNotOwned(response);

            if(!(await this.taskServices.FindTaskById(request.params.id)))
                return taskResponses.taskNotFound(response);

            await this.taskServices.DeleteTask(request.params.id);
            taskResponses.taskDeleted(response);

        }
        
        catch (error) {
            errorResponse(response, 'Error while creating the task', error);
        }
    }
}

module.exports = TaskController;