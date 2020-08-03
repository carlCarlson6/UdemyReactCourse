import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, SET_PROJECT } from "../types"
import { mockProjects } from '../common/data/mocks';

class ProjectServices {
    constructor(dispatch){
        this.dispatch = dispatch
    }

    ShowNewProjectForm() {
        this.dispatch({ type: FORM_PROJECT });
    }
    
    GetProjects() {
        this.dispatch({ type: GET_PROJECTS, payload: mockProjects });
    }

    AddProject(project) {
        this.dispatch({ type: ADD_PROJECT, payload: project});
    }

    SetProject(id) {
        this.dispatch({ type: SET_PROJECT, payload: id});
    }
}

export default ProjectServices