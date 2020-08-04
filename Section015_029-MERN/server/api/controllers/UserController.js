const UserService = require("../../services/UserService");
const userResponses = require('../../common/userResponses');
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
            const token = this.SignJwtAndResponse(user, response);
        } 
        
        catch (error) {
            userResponses.errorResponse(response, error);
        }
    }

    async Login(request, response) {
        try {
            const errors = validationResult(request);
            if(!errors.isEmpty()) 
                throw errors.errors.map(error => error.msg).join(' | ');

            if(!(await this.userService.CheckIfUserExists({email: request.body.email}))) 
                return userResponses.userDoesNotExists(response);
            
            if(!(await this.userService.CheckPassword(request.body)))
                return userResponses.passwordDoesNotMatch(response);
        
            response.status(200).json({message: 'login ok'})
        }

        catch (error) {
            userResponses.errorResponse(response, error);
        }
    }

    SignJwtAndResponse(user, response) {
        let responseToken;
        const payload = {user: {id: user.id}};
        jwt.sign(payload,  process.env.SECRETWORD, {expiresIn:3600}, 
            (error, token) => {
                if(error) throw error;
                userResponses.userCreated(response, {token});
            }
        );
        return responseToken;
    }
}

module.exports = UserController