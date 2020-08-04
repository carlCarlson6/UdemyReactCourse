const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}

const matchPasswrod = async (loginPassword, hashedPassword) => {
    const match = await bcrypt.compare(loginPassword, hashedPassword);
    return match;
}

module.exports = {
    hashPassword,
    matchPasswrod
}