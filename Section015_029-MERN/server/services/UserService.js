const User = require('../models/User');
const hasPassword = require('../common/utils/hashPassword');

class UserService {

    async AddUser(userRequest) {
        let user = new User(userRequest);
        user.password = await hasPassword(user.password);
        await user.save();
    }

    async CheckIfUserExists(searchObject) {
        if(await this.SearchUser(searchObject)){
            return true;
        } else {
            return false;
        }
    }

    async SearchUser(searchObject) {
        return await User.findOne(searchObject); 
    }
}

module.exports = UserService;