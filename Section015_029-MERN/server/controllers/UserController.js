const UserService = require("../services/UserService");
const userResponses = require('../common/userResponses');
const {validationResult} = require('express-validator')

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async Create(request, response) {
        try {
            this.ValidateRequest(request);

            if(await this.userService.CheckIfUserExists({email: request.body.email})) 
                return userResponses.userAlreadyExists(response);

            await this.userService.AddUser(request.body);        
            userResponses.userCreated(response);
        } 
        
        catch (error) {
            userResponses.errorCreatingUser(response, error);
        }
    }

    ValidateRequest(request) {
        const errors = validationResult(request);
        if(!errors.isEmpty()) 
            throw errors.errors.map(error => error.msg).join(' | ');
    }
}

module.exports = UserController