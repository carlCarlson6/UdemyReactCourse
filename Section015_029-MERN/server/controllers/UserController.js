const UserService = require("../services/UserService");
const userResponses = require('../common/userResponses');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async Create(request, response) {
        try {
            const errors = validationResult(request);
            if(!errors.isEmpty()) 
                throw errors.errors.map(error => error.msg).join(' | ');

            if(await this.userService.CheckIfUserExists({email: request.body.email})) 
                return userResponses.userAlreadyExists(response);

            const user = await this.userService.AddUser(request.body);    
            this.SignJwtAndResponse(user, response);
        } 
        
        catch (error) {
            userResponses.errorCreatingUser(response, error);
        }
    }

    SignJwtAndResponse(user, response) {
        const payload = {user: {id: user.id}};
        jwt.sign(payload,  process.env.SECRETWORD, {expiresIn:3600}, 
            (error, token) => {
                if(error) throw error;
                userResponses.userCreated(response, {token});
            }
        );
    }
}

module.exports = UserController