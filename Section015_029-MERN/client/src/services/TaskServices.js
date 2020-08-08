import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, SET_TASK } from "../types";
import httpClient from "../config/HttpClient";

class TaskServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.httpClient = httpClient;
    }

    async GetProjectTasks(projectId) {
        try {
            const response = await this.httpClient.get(`api/tasks/${projectId}`);
            this.dispatch({ type: GET_PROJECT_TASKS, payload: response.data })
        } catch(error) {
            console.log(error.response);
        }
        
    }

    AddTask(task) {
        // TODO
        this.dispatch({ type: ADD_TASK, payload: task })
    }

    DeleteTask(id) {
        // TODO
        this.dispatch({ type: DELETE_TASK, payload: id })
    }

    UpdateTask(task) {
        // TODO
        this.dispatch({type: UPDATE_TASK, payload: task})
    }

    SetTask(task) {
        // TODO
        this.dispatch({type: SET_TASK, payload: task})
    }

}

export default TaskServices;