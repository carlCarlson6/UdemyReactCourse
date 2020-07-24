import FormService from "../services/FormService";
import HttpService from "../services/HttpService";
import StateUpdater from "../common/utils/StateUpdater";

class ProjectController {
    constructor(setNewProject, setError) {
        this.formService = new FormService(setError);
        this.http = new HttpService();
        this.stateUpdater = new StateUpdater(setNewProject);
    }

    UpdateNewProjectData(data, event) {
        this.stateUpdater.UpdataObjectStateDataByEvent(data, event);
    }

    Create(data, event) {
        let formSubmitted = this.formService.Submit(data, event);
        if(!formSubmitted) return;

        this.AddProjectId(data, event);

        // agregar al state

        //reiniciar el form
        
    }

    AddProjectId(data) {
        let id = 'new_id';
        this.stateUpdater.UpdataObjectStateData(data, 'id', id);
    }
    
}

export default ProjectController;
