const userCreated = (response, responseObject) => response.status(201).json({
    ...responseObject, 
    message: 'User created correctly'
});

const userAlreadyExists = response => response.status(400).json({
    message: 'The user already exists'
});

const userDoesNotExists = response => response.status(401).json({
    message: 'The user does not exists'
});

const passwordDoesNotMatch = response => response.status(401).json({
    message: 'The password does not match'
})

const errorResponse = (response, error) => response.status(400).json({
    message: 'Error while creating the user', 
    error: error.toString()
});

module.exports = {
    userCreated, 
    userAlreadyExists, 
    userDoesNotExists, 
    passwordDoesNotMatch, 
    errorResponse
}