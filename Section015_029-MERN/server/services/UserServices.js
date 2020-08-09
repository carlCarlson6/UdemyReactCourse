const User = require('../models/User');
const PasswordUtils = require('../common/utils/PasswordUtils');

class UserServices {
    constructor() {
        this.passwordUtils = new PasswordUtils()
    }

    async AddUser(userRequest) {
        userRequest.createdAt = Date.now();
        let user = new User(userRequest);
        user.password = await this.passwordUtils.HashPassword(user.password);
        await user.save();
        return user;
    }

    async CheckIfUserExists(searchObject) {
        if(await this.SearchUser(searchObject)){
            return true;
        } else {
            return false;
        }
    }

    async CheckPassword(user) {
        const bdPassword = (await this.SearchUser({email: user.email})).password;
        const match = await this.passwordUtils.MatchPasswrod(user.password, bdPassword);
        return match;
    }

    async SearchUser(searchObject) {
        const user = await User.findOne(searchObject);
        return user;
    }

    async GetUserById(id) {
        const user = await User.findById(id).select('-password');
        return user;
    }
}

module.exports = UserServices;