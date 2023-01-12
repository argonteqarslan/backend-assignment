const { HASH_ALGO: ALGORITHM, SALT } = process.env
var bcrypt = require("bcryptjs");
exports.makeHashValue = text => {
    return bcrypt.hashSync(text, 8)
};
