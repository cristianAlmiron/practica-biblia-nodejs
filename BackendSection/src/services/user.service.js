const BaseService = require('./base.service');
let _userRepository = null;
class UserService extends BaseService {
    constructor({ UserRepository }) {
        super(UserRepository);
        _userRepository = UserRepository;
    }

    async getUserByUserName(username) {
        return await _userRepository.getUserByUsername(username);
    }
}

module.exports = UserService;