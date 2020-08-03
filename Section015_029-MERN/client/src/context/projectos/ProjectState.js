import React, { useReducer } from 'react';
import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';
import { FORM_PROJECT } from '../../types';


const ProjectState = props => {
    const initalState = {
        newProjectForm: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initalState);

    //CRUD FUNCTIONS
    const showNewProjectForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    return (
        <projectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                showNewProjectForm: showNewProjectForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;