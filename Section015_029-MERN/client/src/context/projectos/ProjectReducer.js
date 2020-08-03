import { FORM_PROJECT } from "../../types";

const projectReducer = (state, action) => {
    switch(action.type) {

        case FORM_PROJECT:
            return {
                ...state,
                newProjectForm: true
            }
        
        default:
            return state;
    }
}

export default projectReducer;