const taskCreated = (response, responseObject) => response.status(201).json({
    ...responseObject, 
    message: 'Task created'
});

const tasksFound = (response, projects) => response.status(200).json(projects);

const noTaskFound = (response) => response.status(404).json({
    message: 'Task not found'
});

const taskNotOwned = (response) => response.status(401).json({
    message: 'Task not owned by the user'
})

const taskUpdated = (response, responseObject) => response.status(200).json({
    ...responseObject,
    message:'Task updated'
})

const taskDeleted = (response) => response.status(200).json({
    message: 'Task deleted'
})

module.exports = {
    taskCreated,
    tasksFound,
    noTaskFound,
    taskNotOwned,
    taskUpdated,
    taskDeleted
}