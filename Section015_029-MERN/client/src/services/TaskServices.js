import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK } from "../types";

class TaskServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    GetProjectTasks(projectId) {
        this.dispatch({ type: GET_PROJECT_TASKS, payload: projectId })
    }

    AddTask(task) {
        this.dispatch({ type: ADD_TASK, payload: task })
    }

    DeleteTask(id) {
        this.dispatch({ type: DELETE_TASK, payload: id })
    }
}

export default TaskServices;