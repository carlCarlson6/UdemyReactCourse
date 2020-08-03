import { GET_PROJECT_TASKS } from '../../types';

const taskReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECT_TASKS:
            return {...state, projectTasks: [...state.tasks.filter(task => task.projectId === action.payload)]}

        default: return state;
    }
}

export default taskReducer