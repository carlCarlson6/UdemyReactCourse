import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../types";

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

    CompleteTask(task) {
        const newTask = {...task, state: true}
        this.dispatch({type: UPDATE_TASK, payload: newTask})
    }

    IncompleteTask(task) {
        const newTask = {...task, state: false}
        this.dispatch({type: UPDATE_TASK, payload: newTask})
    }

    EditTask() {

    }
}

export default TaskServices;