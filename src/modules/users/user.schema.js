const constants = require("../../config/constants")

const { USER_PUBLIC_FIELDS, USER_PRIVATE_FIELDS } = constants;
const hash = require("../../utils/hash.util.js")
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const _ = require("lodash")
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            default: "",
        },
        lastName: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        username: {
            type: String,
            default: "",
        },
        password: {
            type: String,
            set: (val) => hash.makeHashValue(val),
          },
    }, { timestamps: true }
)

userSchema.methods.verifyPassword = function (pwd) {
    return this.password == hash.makeHashValue(pwd);
};

userSchema.methods.getJWTToken = function () {
    const payload = {
        email: this.email,
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
    };

    return jwt.sign(payload, process.env.JWTSECRET, {
        expiresIn: process.env.TOKEN_EXPIRY,
    });
};

userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    return _.omit(
        obj,
        USER_PRIVATE_FIELDS
    );
};

module.exports = mongoose.model("User", userSchema);
