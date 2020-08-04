const User = require("../models/User");

class UserController {
    async Create(request, response) {
        try {
            let user = new User(request.body);
            await user.save();
            response.send('User created');
        } catch (error) {
            console.log(error);
            response.status(400).send(`Error creating the user => ${error}`);
        }
    }
}

module.exports = UserController