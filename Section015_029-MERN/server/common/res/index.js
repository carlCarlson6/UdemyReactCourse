const userResponses = require('./userResponses');
const projectResponses = require('./projectResponses');

const errorResponse = (response, message, error) => response.status(500).json({
    message, 
    error: error.toString()
});

module.exports = {
    userResponses,
    projectResponses,
    errorResponse
}