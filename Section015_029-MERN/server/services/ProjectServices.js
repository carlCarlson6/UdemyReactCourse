const Project = require("../db/models/Project");

class ProjectServices {
    async AddProject(requestBody) {
        const project = new Project(requestBody);
        await project.save();
        return project;
    }

    async GetUserProjects(userId) {
        const projects = await Project.find({creator: userId}).sort({createdAt: -1})
        return projects
    }
}

module.exports = ProjectServices;