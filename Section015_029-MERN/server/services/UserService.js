const User = require('../db/models/User');
const passwordUtils = require('../common/utils/passwordUtils');

class UserService {

    constructor() {
        this.passwordUtils = passwordUtils
    }

    async AddUser(userRequest) {
        let user = new User(userRequest);
        user.password = await this.passwordUtils.hashPassword(user.password);
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
        const match = await this.passwordUtils.matchPasswrod(user.password, bdPassword);
        return match;
    }

    async SearchUser(searchObject) {
        const user = await User.findOne(searchObject);
        return user;
    }
}

module.exports = UserService;