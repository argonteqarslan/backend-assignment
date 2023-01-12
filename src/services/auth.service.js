const messages = require("../config/messages")
const createError = require("http-errors")
const bcrypt = require("bcryptjs")
class AuthService {
    constructor(model) {
        this.model = model;
    }
    async signUp({ payload }) {
        let user = await this.model.findOne({
            email: payload.email,
        });

        if (user) {
            throw createError(400, messages.userWithEmailExists);
        }
        user = await this.model.create(payload);
        const token = user.getJWTToken({ model: null });
        user._doc["token"] = token;
        return user;
    }

    async signIn({ payload }) {
        let user = await this.model.findOne({
            email: payload.email,
        });

        var passwordIsValid = bcrypt.compareSync(
            payload.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: messages.invalidEmailOrPassword
            });
        }
        return user;
    }
}

exports.AuthService = AuthService;
