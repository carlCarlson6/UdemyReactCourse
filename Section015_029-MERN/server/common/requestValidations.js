const {check} = require('express-validator');

createUserValidation = [
    check('name', 'The name is mandatory').not().isEmpty(),
    check('email', 'Add a valid email').isEmail(),
    check('password', 'Password must be up to 6 characters').isLength({min: 6})
]

loginValidation = [
    check('email', 'Add a valid email').isEmail(),
    check('password', 'Password must be up to 6 characters').isLength({min: 6})
]

module.exports = {createUserValidation, loginValidation}