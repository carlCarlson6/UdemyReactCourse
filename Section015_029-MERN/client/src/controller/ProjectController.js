import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import StateUpdater from "../common/utils/StateUpdater";

class ProjectController {
    constructor(setNewProject, setError, showNewProjectForm) {
        this.formService = new FormService(setError);
        this.http = new HttpService();
        this.stateUpdater = new StateUpdater(setNewProject);
        this.showNewProjectForm = showNewProjectForm;
    }

    UpdateNewProjectData(data, event) {
        this.stateUpdater.UpdataObjectStateDataByEvent(data, event);
    }

    Create(data, event) {
        let formSubmitted = this.formService.Submit(data, event);
        if(!formSubmitted) return;

        this.__AddProjectId(data, event);

        // agregar al state

        //reiniciar el form
    }

    __AddProjectId(data) {
        let id = 'new_id';
        this.stateUpdater.UpdataObjectStateData(data, 'id', id);
    }

    ShowNewProjectForm() {
        this.showNewProjectForm();
    }
    
}

export default ProjectController;
