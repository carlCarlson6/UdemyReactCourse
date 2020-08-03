class Task {
    constructor(name, projectId, state=false, id="pendding_add") {
        this.name = name;
        this.state = state;
        this.id = id;
        this.projectId = projectId
    }
}

export default Task;