const bcrypt = require('bcrypt');

class PasswordUtils {
    async HashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        return hashPassword;
    }   

    async MatchPasswrod(loginPassword, hashedPassword) {
        const match = await bcrypt.compare(loginPassword, hashedPassword);
        return match;
    }
}

module.exports = PasswordUtils;