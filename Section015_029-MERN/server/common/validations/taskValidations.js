const {check} = require('express-validator');

const mandatoryName = check('name', 'Task name is mandatory').not().isEmpty();
const mandatoryProjectId = check('projectId', 'The project id is mandatory').not().isEmpty();
const mandatoryState = check('state', 'Task name is mandatory').not().isEmpty();

createTask = [mandatoryName, mandatoryProjectId]
listTasks = [mandatoryProjectId]
updateTaskName = [mandatoryName]
updateTaskState = [mandatoryState]

module.exports = {createTask, listTasks, updateTaskName, updateTaskState}