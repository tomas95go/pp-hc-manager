const Haircut = require('../../config/db');

const getHaircutList = () => {
    return Haircut.findAll({
        attributes: [['id', 'number'], 'description', 'price'],
    });
};

module.exports = {
    getHaircutList,
};
