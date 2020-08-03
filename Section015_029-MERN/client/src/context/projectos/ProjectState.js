import React, { useReducer } from 'react';
import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';
import ProjectServices from '../../services/ProjectServices';


const ProjectState = props => {   
    const initalState = {
        projects: [],
        newProjectForm: false,
        project: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initalState);

    return (
        <projectContext.Provider
            value={{
                project: state.project,
                newProjectForm: state.newProjectForm,
                projects: state.projects,
                projectServices: new ProjectServices(dispatch)
            }}
        >
            {props.children}
        </projectContext.Provider>
    );
}

export default ProjectState;