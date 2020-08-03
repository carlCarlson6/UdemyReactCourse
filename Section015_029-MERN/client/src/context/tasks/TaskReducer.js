import { GET_PROJECT_TASKS, ADD_TASK } from '../../types';

const taskReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECT_TASKS:
            let tasksProject = [...state.tasks.filter(task => task.projectId === action.payload)];
            console.log(tasksProject)
            console.log(...state.tasks)
            return {...state, projectTasks: tasksProject}

        case ADD_TASK:
            //projectTasks:[...state.projectTasks, action.payload]
            return {...state, tasks: [...state.tasks, action.payload]}

        default: return state;
    }
}

export default taskReducer