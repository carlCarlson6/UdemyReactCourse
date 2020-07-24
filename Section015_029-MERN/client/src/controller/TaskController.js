import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import StateUpdater from "../common/utils/StateUpdater";

class TaskController {
    constructor(setTask, setError){
        this.setUserLogin = setUserLogin;
        this.formService = new FormService(setError);
        this.http = new HttpService();
        this.stateUpdater = new StateUpdater(setTask);
    }

    UpdateTaskData(data, event) {
        this.stateUpdater.UpdataObjectStateDataByEvent(data, this.setUserLogin, event);
    }

    AddTask(data, event){
        this.formService.Submit(data, event);
    }

    AddTaskId(data) {
        let id = 'new_id';
        this.stateUpdater.UpdataObjectStateData(data, 'id', id);
    }
    
}

export default TaskController;
