import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import StateUpdater from "../common/utils/StateUpdater";
import {v4 as generateId} from 'uuid';
import Task from "../common/models/Task";

class TaskController {
    constructor(constructorParams){
        this.formService = new FormService(constructorParams.setError);
        this.http = new HttpService();
        this.stateUpdater = new StateUpdater(constructorParams.setTask);
        this.taskServices = constructorParams.taskServices;
    }

    UpdateNewTaskData(data, event) {
        this.stateUpdater.UpdateObjectStateDataByEvent(data, event);
    }

    CreateTask(data, project, event) {
        data = this.__AddTaskId(data);
        data = this.__AddProjectIdToTask(data, project.id)
        
        let formSubmitted = this.formService.Submit(data, event);        
        if(!formSubmitted) return;

        this.taskServices.AddTask(data);
        this.stateUpdater.UpdateState(new Task(''));

        this.taskServices.GetProjectTasks(project.id);
    }

    __AddTaskId(data) {
        let id = generateId();
        return {...data, id}
    }
    
    __AddProjectIdToTask(data, projectId) {
        return {...data, projectId}
    }

    Delete(id, projectId) {
        this.taskServices.DeleteTask(id);
        this.taskServices.GetProjectTasks(projectId);
    }

    MarkComplete(task, projectId) {
        this.taskServices.CompleteTask(task);
        this.taskServices.GetProjectTasks(projectId);
    }

    MarkIncomplete(task, projectId) {
        this.taskServices.IncompleteTask(task);
        this.taskServices.GetProjectTasks(projectId);
    }
}

export default TaskController;
