const userResponses = require('./userResponses');
const projectResponses = require('./projectResponses');
const taskResponses = require('./taskResponses');
const authResponses = require('./authResponses');


const errorResponse = (response, message, error) => response.status(500).json({
    message
});

module.exports = {
    userResponses,
    projectResponses,
    authResponses,
    taskResponses,
    errorResponse
}