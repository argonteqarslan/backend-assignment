const { crudService, authService } = require("../../services/index.service");
const User = require("../users/user.schema");
const userAuthService = new authService.AuthService(User);

const messages = require("../../config/messages")
exports.auth = {
    signUp: async (req, res, next) => {
        const { body: payload } = req;
        try {

            const user = await userAuthService.signUp({
                payload,
            });

            return res.json({
                status: 200,
                message: messages.created("User"),
                data: user,
            });
        } catch (err) {
            next(err);
        }
    },
    signIn: async (req, res, next) => {
        try {
            const { body: payload } = req;

            const user = await userAuthService.signIn({
                payload,
            });

            const token = user.getJWTToken();
            user._doc["token"] = token;

            return res.json({
                status: 200,
                message: messages.signedIn,
                data: user,
            });
        } catch (err) {
            next(err);
        }
    },
    getUsers: async (req, res, next) => {
        try {
            let users = await User.find();
            return res.json({
                status: 200,
                message: "",
                data: users,
            });
        } catch (err) {
            next(err);
        }
    }
}