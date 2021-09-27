const { generateToken } = require('../helpers/jwt.helper');
let _userService = null;

class AuthService {
    constructor({ UserService }) {
        _userService = UserService;
    }
    async singUp(user) {
        const { username } = user;
        const userExist = await _userService.getUserByUsername(username)
        if (userExist) {
            const error = new Error();
            error.status(401);
            error.message("User already exist");
            throw error;
        }
        return await _userService.create(user);
    }

    async singIn(user) {
        const { username, password } = user;
        const userExist = await _userService.getUserByUsername(username)
        if (!userExist) {
            const error = new Error();
            error.status(404);
            error.message("User does not exist");
            throw error;
        }
        const validPassword = userExist.comparePassword(password);
        if (!validPassword) {
            const error = new Error();
            error.status(400);
            error.message("Invalid Password");
            throw error;
        }
        const userToEncoded = {
            username: userExist.username,
            id: userExist._id,
        };
        const token = generateToken(userToEncoded);
        return { token, user: userExist };
    }
}

module.exports = AuthService;