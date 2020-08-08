const {check} = require('express-validator');

const mandatoryName = check('name', 'The name is mandatory').not().isEmpty()
const validEmail = check('email', 'Add a valid email').isEmail()
const validPassword = check('password', 'Password must be up to 6 characters').isLength({min: 6})

createUser = [mandatoryName, validEmail, validPassword]
login = [validEmail]

module.exports = {createUser, login}