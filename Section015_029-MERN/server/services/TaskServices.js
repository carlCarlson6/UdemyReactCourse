const Task = require("../db/models/Task");

class TaskServices {
    async CreateTask(newTask) {
        const task = new Task(newTask)
        await task.save();
        return task;
    }

    async FindTasksByProject(projectId) {
        const tasks = await Task.find({projectId}).sort({createdAt: -1});
        return tasks;
    }
}

module.exports = TaskServices;