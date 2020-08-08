const Project = require("../models/Project");
const {projectResponses} = require ('../common/res')

class ProjectServices {
    async AddProject(requestBody) {
        const project = new Project(requestBody);
        await project.save();
        return project;
    }

    async GetUserProjects(userId) {
        const projects = await Project.find({creator: userId}).sort({createdAt: -1});
        return projects
    }

    async FindProjectById(id) {
        const project = await Project.findById(id);
        return project;
    }

    ValidateUserProjectOwnership(userId, projectCreator) {
        const ownership = userId === projectCreator.toString()
        return ownership;
    }

    async UpdateProject(id, newProject) {
        const project = await Project.findByIdAndUpdate({_id: id}, {$set: newProject}, {new: true});
        return project;
    }

    async DeleteProject(id) {
        await Project.findOneAndDelete({_id: id})
    }

}

module.exports = ProjectServices;