import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, SET_PROJECT, DELETE_PROJECT } from "../../types";

const projectReducer = (state, action) => {
    switch(action.type) {

        case FORM_PROJECT:
            return { ...state, newProjectForm: true }
        
        case GET_PROJECTS:
            return { ...state, projects: action.payload }

        case ADD_PROJECT:
            return { ...state, projects: [action.payload, ...state.projects], newProjectForm: false }

        case SET_PROJECT:
            return { ...state, project: state.projects.filter(project => project.id === action.payload)[0] }

        case DELETE_PROJECT:
            return { ...state, projects: state.projects.filter(project => project.id !== action.payload), project: null }

        default: return state;
    }
}

export default projectReducer;