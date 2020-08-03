import React, { useReducer } from 'react';
import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';
import { FORM_PROJECT, GET_PROJECT, ADD_PROJECT } from '../../types';
import { mockProjects } from '../../common/data/mocks';


const ProjectState = props => {   

    const initalState = {
        projects: [],
        newProjectForm: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initalState);

    //#region CRUD FUNCTIONS
    const showNewProjectForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECT,
            payload: mockProjects
        })
    }

    const addProject = (project) => {
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }
    //#endregion

    return (
        <projectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                projects: state.projects,
                showNewProjectForm: showNewProjectForm,
                getProjects: getProjects,
                addProject: addProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;