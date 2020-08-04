const userCreated = response => response.status(200).json({message: 'User created'});

const userAlreadyExists = response => response.status(400).json({message: 'The user already exists'});

const errorCreatingUser = (response, error) => response.status(400).json({
    message: 'Error while creating the user', error: error.toString()
});

module.exports = {userCreated, userAlreadyExists, errorCreatingUser}