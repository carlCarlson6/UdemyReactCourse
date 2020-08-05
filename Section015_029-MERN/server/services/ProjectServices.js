const Project = require("../db/models/Project");

class ProjectServices {
    async AddProject(requestBody) {
        const project = new Project(requestBody);
        await project.save();
        return project;
    }
}

module.exports = ProjectServices;