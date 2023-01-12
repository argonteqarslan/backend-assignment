const jwt = require("jsonwebtoken");
const User = require("../modules/users/user.schema")
exports.verifyToken = async (req, res, next) => {
    let  token = req.headers.autorization

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }

    token = req.headers.autorization.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWTSECRET);
        const userId = decoded.id;

        let user = await User.findById(userId);
        req.user = user
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
