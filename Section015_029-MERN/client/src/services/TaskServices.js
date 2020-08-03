import { GET_PROJECT_TASKS, ADD_TASK } from "../types";

class TaskServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    GetProjectTasks(projectId) {
        console.log("GetProjectTasks(projectId)", projectId)
        this.dispatch({
            type: GET_PROJECT_TASKS,
            payload: projectId
        })
    }

    AddTask(task) {
        this.dispatch({
            type: ADD_TASK,
            payload: task
        })
    }
}

export default TaskServices;