const jwt = require('jsonwebtoken');
const {errorResponse, authResponses} = require('../../common/res')

class AuthMiddleWare {
    ValidateLogin(request, response, next) {
        try {
            const token = this.ReadToken(request, response);
            const user = this.ValidateToken(token, response);
            request.user = user;
            next();
        }
        catch (error) {
            errorResponse(response, error.toString(), error.toString())
        }
    }

    ReadToken(request, response){
        const token = request.header('x-auth-token');
        if(!token) return authResponses.noToken(response);
        return token;
    }

    ValidateToken(token, response) {
        try {
            const encrypted = jwt.verify(token, process.env.SECRETWORD);
            return encrypted.user;
        }
        catch (error) {
            authResponses.invalidToken(response);
        }
    }
}

module.exports = AuthMiddleWare;