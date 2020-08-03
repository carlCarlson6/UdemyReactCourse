import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, SET_PROJECT } from "../../types";

const projectReducer = (state, action) => {
    switch(action.type) {

        case FORM_PROJECT:
            return { ...state, newProjectForm: true }
        
        case GET_PROJECTS:
            return { ...state, projects: action.payload }

        case ADD_PROJECT:
            return { ...state, projects: [...state.projects, action.payload], newProjectForm: false }

        case SET_PROJECT:
            return { ...state, project: state.projects.filter(project => project.id === action.payload)[0] }

        default:
            return state;
    }
}

export default projectReducer;