import FormService from "../services/FormService";
import StateUpdater from "../common/utils/StateUpdater";
import Task from "../common/models/Task";

class TaskController {
    constructor(constructorParams){
        this.formService = new FormService(constructorParams.setError);
        this.stateUpdater = new StateUpdater(constructorParams.setTask);
        this.taskServices = constructorParams.taskServices;
    }

    UpdateNewTaskData(data, event) {
        this.stateUpdater.UpdateObjectStateDataByEvent(data, event);
    }

    async CreateTask(data, project, event) {
        data = this.AddProjectIdToTask(data, project._id)
        
        let formSubmitted = this.formService.Submit(data, event);        
        if(!formSubmitted) return;

        await this.taskServices.AddTask({name: data.name, projectId: data.projectId});
        this.stateUpdater.UpdateState(new Task(''));
        await this.taskServices.GetProjectTasks(project._id);
    }
    
    AddProjectIdToTask(data, projectId) {
        return {...data, projectId}
    }

    async Delete(id, projectId) {
        await this.taskServices.DeleteTask(id, projectId);
        await this.taskServices.GetProjectTasks(projectId);
    }

    async MarkComplete(task, projectId) {
        const request = {state: "true", projectId}
        await this.taskServices.UpdateTask(task._id, request);
        await this.taskServices.GetProjectTasks(projectId);
    }

    async MarkIncomplete(task, projectId) {
        const request = {state: "false", projectId}
        await this.taskServices.UpdateTask(task._id, request);
        await this.taskServices.GetProjectTasks(projectId);
    }

    SelectTask(task) {
        this.taskServices.SetTask(task);
    }

    async EditTask(task, project, event) {
        let formSubmitted = this.formService.Submit(task, event);        
        if(!formSubmitted) return;

        await this.taskServices.UpdateTask(task._id, {name: task.name, projectId: project._id});
        this.stateUpdater.UpdateState(new Task(''));
        await this.taskServices.GetProjectTasks(project._id);
        this.SelectTask(null);
    }
}

export default TaskController;
