import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import StateUpdater from "../common/utils/StateUpdater";
import {v4 as generateId} from 'uuid'
import Project from "../common/models/Project";

class ProjectController {
    constructor(constructorParams) {
        this.formService = new FormService(constructorParams.setError);
        this.http = new HttpService();
        this.stateUpdater = new StateUpdater(constructorParams.setNewProject);
        this.projectServices = constructorParams.projectServices;
        this.taskServices = constructorParams.taskServices
    }

    UpdateNewProjectData(data, event) {
        this.stateUpdater.UpdateObjectStateDataByEvent(data, event);
    }

    Create(data, event) {
        let formSubmitted = this.formService.Submit(data, event);
        if(!formSubmitted) return;

        data = this.__AddProjectId(data, event);
        
        // agregar al state
        this.projectServices.AddProject(data)

        //reiniciar el form
        this.stateUpdater.UpdateState(new Project())
    }

    __AddProjectId(data) {
        let id = generateId();
        return {...data, id}
    }

    ShowNewProjectForm() {
        this.projectServices.ShowNewProjectForm();
    }

    SetProject(projectId) {
        this.projectServices.SetProject(projectId);
        this.taskServices.GetProjectTasks(projectId);
    } 
    
    Delete(projectId, tasks) {
        this.projectServices.DeleteProject(projectId);
        tasks.forEach(task => this.taskServices.DeleteTask(task.id))
        this.taskServices.GetProjectTasks(projectId);
    }
}

export default ProjectController;
