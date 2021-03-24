const { Haircut } = require('../index');

const getList = () => {
    return Haircut.findAll({
        where: {
            id: 50,
        },
    });
};

module.exports = {
    getList,
};
