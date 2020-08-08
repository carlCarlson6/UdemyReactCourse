const TaskServices = require("../../services/TaskServices");
const { taskResponses, projectResponses, errorResponse } = require('../../common/res');
const { validateRequest } = require("../../common/validations");
const ProjectServices = require("../../services/ProjectServices");
const ServiceHelper = require("../../common/utils/ServiceHelper");


class TaskController {
    constructor() {
        this.taskServices = new TaskServices();
        this.projectServices = new ProjectServices();
        this.serviceHelper = new ServiceHelper(this.projectServices, this.taskServices);
    }

    async Create(request, response) {
        try {
            validateRequest(request);

            if(!(await this.serviceHelper.FindProjectAndOwnership(request.user, request.projectId, response)))
                return;

            const task = await this.taskServices.CreateTask(request.body)
            taskResponses.taskCreated(response, {task})
        } 

        catch (error) {
            errorResponse(response, `Error while creating the task: ${error.toString()}`);
        }
    }

    async List(request, response) {
        try {
            validateRequest(request);

            if(!(await this.serviceHelper.FindProjectAndOwnership(request.user, request.projectId, response)))
                return;
            
            const tasks = await this.taskServices.FindProjectTasks(request.body.projectId);
            taskResponses.tasksFound(response, tasks);
        } 
        
        catch (error) {
            errorResponse(response, `Error while creating the task: ${error.toString()}`);
        }
    }
    
    async Update(request, response) {        
        try {
            validateRequest(request);

            if(!(await this.serviceHelper.FindProjectOwnershipAndFindTask(request.user, request.projectId, request.params.id, response)))
                return;

            const newTask = this.taskServices.ConstructNewTask(request.body);
            const updatedTask = await this.taskServices.UpdateTask(request.params.id, newTask);
            taskResponses.taskUpdated(response, {task:updatedTask});
        } 
        
        catch (error) {
            errorResponse(response, `Error while updating the task: ${error.toString()}`);
        }
    }

    async Delete(request, response) {
        try {
            validateRequest(request);
            
            if(!(await this.serviceHelper.FindProjectOwnershipAndFindTask(request.user, request.body.projectId, request.params.id, response)))
                return;

            await this.taskServices.DeleteTask(request.params.id);
            taskResponses.taskDeleted(response);

        }
        
        catch (error) {
            errorResponse(response, `Error while deleting the task: ${error.toString()}`, error);
        }
    }
}

module.exports = TaskController;