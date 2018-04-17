const httpStatus = require('http-status-codes');
const usersService = require('../service/userService');

exports.findAllUsers = function (request, response) {
    usersService.findAllUsers()
        .then((data) => {
            var usersJson = JSON.stringify(data);
            response.send(usersJson);
        })
        .catch((err) => {
            console.log('logging service error')
        })
};

exports.findUserById = function (request, response) {
    var id = request.params.id;

    try {
        usersService.findUserById(id)
            .then((data) => {
                var usersJson = JSON.stringify(data);
                response.send(usersJson);
            })
            .catch((err) => {
                console.log('logging service error');
            });
    } catch (err) {
        console.log('logging service error validate');
        response.status(httpStatus.BAD_REQUEST);
        response.send();
    }

};
