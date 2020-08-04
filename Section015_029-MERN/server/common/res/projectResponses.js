const projectCreated = (response, responseObject) => response.status(201).json({
    ...responseObject, 
    message: 'Project created correctly'
});

module.exports = {
    projectCreated
}