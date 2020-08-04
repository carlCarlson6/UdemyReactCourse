const UserServices = require("../../services/UserServices");
const {errorResponse, userResponses} = require('../../common/res');
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

            if(await this.userServices.CheckIfUserExists({email: request.body.email})) 
                return userResponses.userAlreadyExists(response);

            const user = await this.userServices.AddUser(request.body);    
            const token = this.CreateAndSignJwt(user, response);
        } 
        
        catch (error) {
            errorResponse(response, 'Error while creating the user', error);
        }
    }

    async Login(request, response) {
        try {
            const errors = validationResult(request);
            if(!errors.isEmpty()) 
                throw errors.errors.map(error => error.msg).join(' | ');

            if(!(await this.userServices.CheckIfUserExists({email: request.body.email}))) 
                return userResponses.userDoesNotExists(response);
            
            if(!(await this.userServices.CheckPassword(request.body)))
                return userResponses.passwordDoesNotMatch(response);
        
            let user = await this.userServices.SearchUser({email: request.body.email});
            this.CreateAndSignJwt(user, response);
        }

        catch (error) {
            errorResponse(response, 'Error while login the user', error);
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