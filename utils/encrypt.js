const bcrypt = require('bcrypt')

async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash
}

async function comparePassword(plaintextPassword, hash) {
    const match = await bcrypt.compare(plaintextPassword, hash);
    return match
}

module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword,
};