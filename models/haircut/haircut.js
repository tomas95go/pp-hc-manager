const { Haircut } = require('../index');

const getList = () => {
    return Haircut.findAll({
        where: {
            ids: 50,
        },
    });
};

module.exports = {
    getList,
};
