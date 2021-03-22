const { Haircut } = require('../index');

const getList = () => {
    return Haircut.findAll();
};

module.exports = {
    getList,
};
