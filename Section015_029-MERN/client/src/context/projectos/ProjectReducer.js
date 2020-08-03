import { FORM_PROJECT, GET_PROJECT } from "../../types";

const projectReducer = (state, action) => {
    switch(action.type) {

        case FORM_PROJECT:
            return {
                ...state,
                newProjectForm: true
            }
        
        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload
            }

        default:
            return state;
    }
}

export default projectReducer;