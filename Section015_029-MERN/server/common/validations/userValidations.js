const {check} = require('express-validator');

createUser = [
    check('name', 'The name is mandatory').not().isEmpty(),
    check('email', 'Add a valid email').isEmail(),
    check('password', 'Password must be up to 6 characters').isLength({min: 6})
]

login = [
    check('email', 'Add a valid email').isEmail(),
    check('password', 'Password must be up to 6 characters').isLength({min: 6})
]

module.exports = {createUser, login}