import React, { useReducer } from 'react';
import taskReducer from './TaskReducer';
import taskContext from './TaskContext';
import TaskServices from '../../services/TaskServices';
import {mockProjectTasks} from '../../common/data/mocks';

const TaskState = props => {
    const initialState = {
        tasks: mockProjectTasks,
        projectTasks: []
    }

    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <taskContext.Provider
            value={{
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