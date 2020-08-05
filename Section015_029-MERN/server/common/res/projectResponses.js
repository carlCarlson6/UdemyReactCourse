const projectCreated = (response, responseObject) => response.status(201).json({
    ...responseObject, 
    message: 'Project created correctly'
});

const projectsFound = (response, projects) => response.status(200).json(projects);

module.exports = {
    projectCreated,
    projectsFound
}