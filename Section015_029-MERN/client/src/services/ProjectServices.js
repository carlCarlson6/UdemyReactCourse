import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, SET_PROJECT, DELETE_PROJECT } from "../types"
import { mockProjects } from '../common/data/mocks';
import httpClient from "../config/HttpClient";

class ProjectServices {
    constructor(dispatch){
        this.dispatch = dispatch;
        this.httpClient = httpClient;
    }

    ShowNewProjectForm() {
        this.dispatch({ type: FORM_PROJECT });
    }
    
    async GetProjects(data) {
        try{
            const response = await this.httpClient.get('/api/projects', data);
            this.dispatch({ type: GET_PROJECTS, payload: response.data });
        } catch(error) {
            console.log(error.response);
        }
        
    }

    async AddProject(name) {
        try{
            const response = await this.httpClient.post('/api/projects', {name});
            this.dispatch({ type: ADD_PROJECT, payload: response.data.project });
        } catch(error) {
            console.log(error.response);
        }
    }

    SetProject(id) {
        this.dispatch({ type: SET_PROJECT, payload: id});
    }

    async DeleteProject(id) {
        try{
            const response = await this.httpClient.delete(`/api/projects/${id}`);
            console.log(response.data);
            this.dispatch({ type: DELETE_PROJECT, payload: id});
        } catch(error) {
            console.log(error.response);
        }
    }
}

export default ProjectServices