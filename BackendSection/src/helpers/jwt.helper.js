const { sign } = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports.generateToken = function (user) {
    return sign({ user }, JWT_SECRET, { expireIn: "4h" })
};
