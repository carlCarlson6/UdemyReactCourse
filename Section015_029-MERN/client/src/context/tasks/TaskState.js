import React, { useReducer } from 'react';
import taskReducer from './TaskReducer';
import taskContext from './TaskContext';
import TaskServices from '../../services/TaskServices';
import {mockTasks} from '../../common/data/mocks';

const TaskState = props => {
    const initialState = {
        selectedTask: null,
        tasks: mockTasks,
        projectTasks: []
    }

    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <taskContext.Provider
            value={{
                selectedTask: state.selectedTask,
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskServices: new TaskServices(dispatch)
            }}
        >
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState