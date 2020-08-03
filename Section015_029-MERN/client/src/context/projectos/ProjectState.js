import React, { useReducer } from 'react';
import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';

const ProjectState = props => {
    const initalState = {
        newProjectForm: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initalState);

    // funciones crud


    return (
        <projectContext.Provider
            value={{
                newProjectForm: state.newProjectForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;