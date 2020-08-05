const Task = require("../db/models/Task");

class TaskServices {
    async CreateTask(newTask) {
        const task = new Task(newTask)
        await task.save();
        return task;
    }
}

module.exports = TaskServices;