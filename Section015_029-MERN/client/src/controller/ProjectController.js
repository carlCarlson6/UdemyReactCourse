import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import StateUpdater from "../common/utils/StateUpdater";
import {v4 as generateId} from 'uuid'
import Project from "../common/models/Project";

class ProjectController {
    constructor(setNewProject, setError, showNewProjectForm, projectAdder) {
        this.formService = new FormService(setError);
        this.http = new HttpService();
        this.projectStateUpdater = new StateUpdater(setNewProject);
        this.showNewProjectForm = showNewProjectForm;
        this.projectAdder = projectAdder
    }

    UpdateNewProjectData(data, event) {
        this.stateUpdater.UpdataObjectStateDataByEvent(data, event);
    }

    Create(data, event) {
        let formSubmitted = this.formService.Submit(data, event);
        if(!formSubmitted) return;

        data = this.__AddProjectId(data, event);
        
        // agregar al state
        this.projectAdder(data)

        //reiniciar el form
        this.stateUpdater.UpdateState(new Project())
    }

    __AddProjectId(data) {
        let id = generateId();
        this.stateUpdater.UpdataObjectStateData(data, 'id', id);
        return {...data, ['id']:id}
    }

    ShowNewProjectForm() {
        this.showNewProjectForm();
    }
    
}

export default ProjectController;
