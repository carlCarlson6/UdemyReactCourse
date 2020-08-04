const Project = require("../db/models/Project");

class ProjectServices {
    async AddProject(requestBody) {
        console.log('desde el service', requestBody);
        const project = new Project(requestBody);
        await project.save();
        return project;
    }
}

module.exports = ProjectServices;