const UserServices = require("../../services/UserServices");
const userResponses = require('../../common/res/userResponses');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');

class UserController {
    constructor() {
        this.userServices = new UserServices();
    }

    async Create(request, response) {
        try {
            const errors = validationResult(request);
            if(!errors.isEmpty()) 
                throw errors.errors.map(error => error.msg).join(' | ');

            if(await this.userService.CheckIfUserExists({email: request.body.email})) 
                return userResponses.userAlreadyExists(response);

            const user = await this.userService.AddUser(request.body);    
            const token = this.CreateAndSignJwt(user, response);
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
        
            let user = await this.userService.SearchUser({email: request.body.email});
            this.CreateAndSignJwt(user, response);
        }

        catch (error) {
            userResponses.errorResponse(response, error);
        }
    }

    CreateAndSignJwt(user, response) {
        let responseToken;
        const payload = {user: {id: user.id}};
        jwt.sign(payload,  process.env.SECRETWORD, {expiresIn:3600}, 
            (error, token) => {
                if(error) throw error;
                response.json({token});
            }
        );
        return responseToken;
    }
}

module.exports = UserController