import FormService from "../services/FormService";
import StateUpdater from "../common/utils/StateUpdater";
import {v4 as generateId} from 'uuid'
import Project from "../common/models/Project";

class ProjectController {
    constructor(constructorParams) {
        this.formService = new FormService(constructorParams.setError);
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

        this.projectServices.AddProject(data.name)

        this.stateUpdater.UpdateState(new Project())
    }


    ShowNewProjectForm() {
        this.projectServices.ShowNewProjectForm();
    }

    async SetProject(projectId) {
        this.projectServices.SetProject(projectId);
        await this.taskServices.GetProjectTasks(projectId);
        this.taskServices.SetTask(null);
    } 
    
    Delete(projectId, tasks) {
        this.projectServices.DeleteProject(projectId);
        if(tasks.length === 0) return;
        tasks.forEach(task => this.taskServices.DeleteTask(task.id))
        this.taskServices.GetProjectTasks(projectId);
    }
}

export default ProjectController;
