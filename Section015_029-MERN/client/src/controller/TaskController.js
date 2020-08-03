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

    CreateTask(data, project, event){
        let formSubmitted = this.formService.Submit(data, event);
        if(!formSubmitted) return;

        data = this.__AddTaskId(data, event);
        data = this.__AddProjectIdToTask(data, project.id)
        console.log(data);
        
        // agregar al state
        this.taskServices.AddTask(data)

        //reiniciar el form
        this.stateUpdater.UpdateState(new Task())

    }

    __AddTaskId(data) {
        let id = generateId();
        return {...data, id}
    }
    
    __AddProjectIdToTask(data, projectId) {
        return {...data, projectId}
    }
}

export default TaskController;
