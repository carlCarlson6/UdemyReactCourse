import { GET_PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../../types';

const taskReducer = (state, action) => {
    switch(action.type) {
        case GET_PROJECT_TASKS:
            let newProjectTasks = [...state.tasks.filter(task => task.projectId === action.payload)]
            return {...state, projectTasks: newProjectTasks}

        case ADD_TASK:
            console.log('ADD_TASK', action.payload)
            return {tasks: [...state.tasks, action.payload], ...state}

        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload)};

        case UPDATE_TASK:
            let newTask = action.payload;
            const newTaskIndex = state.tasks.findIndex(task => task.id === newTask.id);
            let newTasks = [...state.tasks];
            newTasks[newTaskIndex] = newTask;
            return {...state, tasks: newTasks};

        default: return state;
    }
}

export default taskReducer