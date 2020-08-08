const UserServices = require("../../services/UserServices");
const {errorResponse, userResponses} = require('../../common/res');
const { validateRequest } = require("../../common/validations");
const jwt = require('jsonwebtoken');

class UserController {
    constructor() {
        this.userServices = new UserServices();
    }

    async Create(request, response) {
        try {
            validateRequest(request);

            if(await this.userServices.CheckIfUserExists({email: request.body.email})) 
                return userResponses.userAlreadyExists(response);

            const user = await this.userServices.AddUser(request.body);    
            const token = this.CreateSignJwtAndResponse(user, 201, response);
        } 
        
        catch (error) {
            errorResponse(response, 'Error while creating the user', error);
        }
    }

    async Login(request, response) {
        try {
            validateRequest(request);

            if(!(await this.userServices.CheckIfUserExists({email: request.body.email}))) 
                return userResponses.userDoesNotExists(response);
            
            if(!(await this.userServices.CheckPassword(request.body)))
                return userResponses.passwordDoesNotMatch(response);
        
            let user = await this.userServices.SearchUser({email: request.body.email});
            this.CreateSignJwtAndResponse(user, 200, response);
        }

        catch (error) {
            errorResponse(response, 'Error while login the user', error);
        }
    }

    async GetAuthenticatedUser(request, response) {
        try {
            const user = await this.userServices.GetUserById(request.user.id)
            return userResponses.userFound(response, user);
        }

        catch (error) {
            errorResponse(response, 'Hubo un error', error);
        }
    }

    CreateSignJwtAndResponse(user, responseCode, response) {
        const payload = {user: {id: user.id}};
        jwt.sign(payload,  process.env.SECRETWORD, {expiresIn:7200}, 
            (error, token) => {
                if(error) throw error;
                response.status(responseCode).json({token});
            }
        );
    }
}

module.exports = UserController