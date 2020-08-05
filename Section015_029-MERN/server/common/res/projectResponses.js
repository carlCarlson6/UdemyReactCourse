const projectCreated = (response, responseObject) => response.status(201).json({
    ...responseObject, 
    message: 'Project created'
});

const projectsFound = (response, projects) => response.status(200).json(projects);

const noProjectFound = (response) => response.status(404).json({
    message: 'Project not found'
});

const projectNotOwned = (response) => response.status(401).json({
    message: 'Project not owned by the user'
})

const projectUpdated = (response, responseObject) => response.status(200).json({
    ...responseObject,
    message:'Project updated'
})

const projectDeleted = (response) => response.status(200).json({
    message: 'Project deleted'
})

module.exports = {
    projectCreated,
    projectsFound,
    noProjectFound,
    projectNotOwned,
    projectUpdated,
    projectDeleted
}