import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, SET_TASK } from "../types";
import httpClient from "../config/HttpClient";

class TaskServices {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.httpClient = httpClient;
    }

    async GetProjectTasks(projectId) {
        try {
            const response = await this.httpClient.get(`/api/tasks/${projectId}`);
            this.dispatch({ type: GET_PROJECT_TASKS, payload: response.data });
        } catch(error) {
            console.log(error.response);
        }
        
    }

    async AddTask(requestBody) {
        try {
            const response = await this.httpClient.post('/api/tasks', requestBody);
            this.dispatch({ type: ADD_TASK, payload: response.data.task });
        } catch(error) {
            console.log(error.response);
        }
    }

    async DeleteTask(taskId, projectId) {
        try{
            const response = await this.httpClient.delete(`/api/tasks/${taskId}`, {data: {projectId}});
            console.log(response.data);
            this.dispatch({ type: DELETE_TASK, payload: taskId });
        } catch(error) {
            console.log(error.response);
        }
        
    }

    async UpdateTask(task) {
        try {
            this.dispatch({type: UPDATE_TASK, payload: task});
        } catch(error) {
            console.log(error.response);
        }
    }

    SetTask(task) {
        this.dispatch({type: SET_TASK, payload: task});
    }

}

export default TaskServices;