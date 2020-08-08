const userAlreadyExists = response => response.status(400).json({
    message: 'El usuario ya existe'
});

const userDoesNotExists = response => response.status(401).json({
    message: 'EL usuario no existe'
});

const passwordDoesNotMatch = response => response.status(401).json({
    message: 'Las constraseñas no coinciden'
})

module.exports = {
    userAlreadyExists, 
    userDoesNotExists, 
    passwordDoesNotMatch
}