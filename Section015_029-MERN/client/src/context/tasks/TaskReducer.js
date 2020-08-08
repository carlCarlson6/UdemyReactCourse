import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, SET_TASK } from '../../types';

const taskReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECT_TASKS:
            //let newProjectTasks = [...state.tasks.filter(task => task.projectId === action.payload)]
            return {...state, projectTasks: action.payload}

        case ADD_TASK:
            return {...state, tasks: [action.payload, ...state.tasks]}

        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task._id !== action.payload)};

        case UPDATE_TASK:
            let updatedTask = action.payload;
            let newTasks = state.tasks.map(task => task._id === updatedTask.id ? updatedTask : task)
            return {...state, tasks: newTasks}

        case SET_TASK:
            return {...state, selectedTask: action.payload}

        default: return state;
    }
}

export default taskReducer