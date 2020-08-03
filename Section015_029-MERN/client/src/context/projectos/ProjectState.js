import React, { useReducer } from 'react';
import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';

const ProjectState = props => {
    const initalState = {
        form: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initalState);

    // funciones crud


    return (
        <projectContext.Provider
            value={{
                form: state.form
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;