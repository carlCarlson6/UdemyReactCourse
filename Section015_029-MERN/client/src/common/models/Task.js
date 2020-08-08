class Task {
    constructor(name, projectId, state=false, _id="pendding_add") {
        this.name = name;
        this.state = state;
        this._id = _id;
        this.projectId = projectId
    }
}

export default Task;