import { GET_PROJECT_TASKS } from "../types";

class TaskServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    GetProjectTasks(projectId){
        this.dispatch({
            type: GET_PROJECT_TASKS,
            payload: projectId
        })
    }
}

export default TaskServices;