import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, SET_TASK } from "../types";

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

    UpdateTask(task) {
        this.dispatch({type: UPDATE_TASK, payload: task})
    }

    SetTask(task) {
        this.dispatch({type: SET_TASK, payload: task})
    }

}

export default TaskServices;