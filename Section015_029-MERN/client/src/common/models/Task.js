class Task {
    constructor(name, state=false, id='pending_add') {
        this.name = name;
        this.state = state;
        this.id = id;
    }
}

export default Task;