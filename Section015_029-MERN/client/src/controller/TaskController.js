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

    Delete(id, projectId) {
        this.taskServices.DeleteTask(id);
        this.taskServices.GetProjectTasks(projectId);
    }

    async MarkComplete(task, projectId) {
        task.state = true;
        await this.taskServices.UpdateTask(task);
        await this.taskServices.GetProjectTasks(projectId);
    }

    async MarkIncomplete(task, projectId) {
        task.state = false;
        await this.taskServices.UpdateTask(task);
        await this.taskServices.GetProjectTasks(projectId);
    }

    SelectTask(task) {
        this.taskServices.SetTask(task);
    }

    async EditTask(data, project, event) {
        let formSubmitted = this.formService.Submit(data, event);        
        if(!formSubmitted) return;

        await this.taskServices.UpdateTask(data);
        this.stateUpdater.UpdateState(new Task(''));
        await this.taskServices.GetProjectTasks(project._id);
        this.SelectTask(null);
    }
}

export default TaskController;
