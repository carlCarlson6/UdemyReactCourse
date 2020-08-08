const Task = require("../models/Task");
const { userDoesNotExists } = require("../common/res/userResponses");

class TaskServices {
    async CreateTask(newTask) {
        const task = new Task(newTask)
        console.log(task);
        await task.save();
        return task;
    }

    async FindProjectTasks(projectId) {
        const tasks = await Task.find({projectId}).sort({createdAt: -1});
        return tasks;
    }

    ConstructNewTask(requestBody) {
        const newTask = {}
        if(requestBody.name) newTask.name = requestBody.name;
        if(requestBody.state) newTask.state = requestBody.state;
        return newTask;
    }

    async FindTaskById(id) {
        const task = await Task.findById(id);
        return task;
    }

    async UpdateTask(id, newTask) {
        const task = await Task.findByIdAndUpdate({_id: id}, {$set: newTask}, {new: true});
        return task;
    }

    async DeleteTask(id) {
        await Task.findByIdAndDelete({_id: id})
    }
}

module.exports = TaskServices;