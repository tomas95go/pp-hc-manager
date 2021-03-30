const Message = require('../classes/messages');

const formatSuccess = data => {
    const errorMessage = new Message('Success', data);
    return errorMessage;
};

const formatError = data => {
    const errorMessage = new Message('Failure', data);
    return errorMessage;
};

module.exports = {
    formatSuccess,
    formatError,
};
