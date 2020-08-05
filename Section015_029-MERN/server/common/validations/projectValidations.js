const {check} = require('express-validator');

const mandatoryName = check('name', 'Project name is mandatory').not().isEmpty();

createProject = [mandatoryName]
updateProject = [mandatoryName]

module.exports = {createProject, updateProject}