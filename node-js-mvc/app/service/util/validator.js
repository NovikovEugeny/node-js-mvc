function validateId (id) {
    if (id <= 0) {
        throw new Error('Service exc');
    }
}

module.exports = {
    validateId
};