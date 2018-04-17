const User = require('../model/user');
const repository = require('../repository/userRepository');
const validator = require('../service/util/validator');

findAllUsers = function () {
    return repository.findAll()
        .then((result) => {
            return result;
        })
        .catch((err) => {//сработает если был вызван reject()
            throw new Error('service error');
        });
}

findUserById = function (id) {
    validator.validateId(id);

    return repository.findOne(id)
        .then((result) => {
            return result;
        })
        .catch((err) => {
            throw new Error('service error');
        });
}

module.exports = {
    findAllUsers,
    findUserById
};