const userCreated = (response, responseObject) => response.status(200).json({
    ...responseObject, 
    message: 'User created correctly'
});

const userAlreadyExists = response => response.status(400).json({
    message: 'The user already exists'
});

const errorCreatingUser = (response, error) => response.status(400).json({
    message: 'Error while creating the user', 
    error: error.toString()
});

module.exports = {userCreated, userAlreadyExists, errorCreatingUser}