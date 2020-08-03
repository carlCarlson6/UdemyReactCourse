import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK } from '../../types';

const taskReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECT_TASKS:
            return {...state, projectTasks: [...state.tasks.filter(task => task.projectId === action.payload)]}

        case ADD_TASK:
            return {tasks: [...state.tasks, action.payload], ...state}

        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload)};

        default: return state;
    }
}

export default taskReducer