const {check} = require('express-validator');

const mandatoryName = check('name', 'Task name is mandatory').not().isEmpty();
const mandatoryProjectId = check('projectId', 'The project id is mandatory').not().isEmpty();

createTask = [mandatoryName, mandatoryProjectId]
listTasks = []
updateTask = [mandatoryProjectId]
deleteTask = [mandatoryProjectId]

module.exports = {createTask, listTasks, updateTask, deleteTask}