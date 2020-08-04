const userAlreadyExists = response => response.status(400).json({
    message: 'The user already exists'
});

const userDoesNotExists = response => response.status(401).json({
    message: 'The user does not exists'
});

const passwordDoesNotMatch = response => response.status(401).json({
    message: 'The password does not match'
})

module.exports = {
    userAlreadyExists, 
    userDoesNotExists, 
    passwordDoesNotMatch
}