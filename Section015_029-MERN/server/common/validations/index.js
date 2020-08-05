const {validationResult} = require('express-validator');
const projectValidations = require('./projectValidations');
const userValidations = require('./userValidations');
const taskValidations = require('./taskValidations')

const validateRequest = (request) => {
    const errors = validationResult(request);
    if(!errors.isEmpty()) 
        throw errors.errors.map(error => error.msg).join(' | ');
}

module.exports = {
    validateRequest,
    projectValidations,
    userValidations,
    taskValidations
}