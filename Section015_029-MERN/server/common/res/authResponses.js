const noToken = (response) => response.status(401).json({message: 'No token found on the request'})

const invalidToken = (response) => response.status(401).json({message: 'Invalid token'})

module.exports = {
    noToken,
    invalidToken
}