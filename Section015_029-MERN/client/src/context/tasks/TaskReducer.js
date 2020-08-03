import { GET_PROJECT_TASKS, ADD_TASK } from '../../types';

const taskReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECT_TASKS:
            return {...state, projectTasks: [...state.tasks.filter(task => task.projectId === action.payload)]}

        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload], projectTasks: [...state.projectTasks, action.payload]}

        default: return state;
    }
}

export default taskReducer