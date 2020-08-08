module.exports = {
    userAlreadyExists: response => response.status(400).json({
        message: 'El usuario ya existe'
    }),

    userDoesNotExists: response => response.status(401).json({
        message: 'EL usuario no existe'
    }), 

    passwordDoesNotMatch: response => response.status(401).json({
        message: 'Las constraseñas no coinciden'
    }),

    userFound: (response, user) => response.status(200).json({user})
}