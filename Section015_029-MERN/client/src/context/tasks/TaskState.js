import React, { useReducer } from 'react';
import taskReducer from './TaskReducer';
import taskContext from './TaskContext';
import TaskServices from '../../services/TaskServices';

const TaskState = props => {
    const initialState = {}

    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <taskContext.Provider
            value={{
                taskServices: new TaskServices(dispatch)
            }}
        >
            {props.children}
        </taskContext.Provider>
    )
}