import FormService from "../services/FormService";
import StateUpdater from "../common/utils/StateUpdater";
import {v4 as generateId} from 'uuid';
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

    CreateTask(data, project, event) {
        data = this.__AddTaskId(data);
        data = this.__AddProjectIdToTask(data, project._id)
        
        let formSubmitted = this.formService.Submit(data, event);        
        if(!formSubmitted) return;

        this.taskServices.AddTask(data);
        this.stateUpdater.UpdateState(new Task(''));
        this.taskServices.GetProjectTasks(project._id);
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
        task.state = true;
        this.taskServices.UpdateTask(task);
        this.taskServices.GetProjectTasks(projectId);
    }

    MarkIncomplete(task, projectId) {
        task.state = false;
        this.taskServices.UpdateTask(task);
        this.taskServices.GetProjectTasks(projectId);
    }

    SelectTask(task) {
        this.taskServices.SetTask(task);
    }

    EditTask(data, project, event) {
        let formSubmitted = this.formService.Submit(data, event);        
        if(!formSubmitted) return;

        this.taskServices.UpdateTask(data);
        this.stateUpdater.UpdateState(new Task(''));
        this.taskServices.GetProjectTasks(project._id);
        this.SelectTask(null);
    }
}

export default TaskController;
