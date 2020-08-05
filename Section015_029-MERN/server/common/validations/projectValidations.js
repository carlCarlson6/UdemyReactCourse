const {check} = require('express-validator');

createProject = [
    check('name', 'Project name is mandatory').not().isEmpty()
]

module.exports = {createProject}