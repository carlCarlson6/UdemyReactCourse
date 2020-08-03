import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import StateUpdater from "../common/utils/StateUpdater";
import {v4 as generateId} from 'uuid'
import Project from "../common/models/Project";

class ProjectController {
    constructor(setNewProject, setError, projectServices) {
        this.formService = new FormService(setError);
        this.http = new HttpService();
        this.stateUpdater = new StateUpdater(setNewProject);
        this.projectServices = projectServices;
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
        return {...data, ['id']:id}
    }

    ShowNewProjectForm() {
        this.projectServices.ShowNewProjectForm();
    }
    
}

export default ProjectController;
