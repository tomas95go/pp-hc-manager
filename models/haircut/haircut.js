const { Haircut } = require('../index');

const getList = () => {
    return Haircut.findAll();
};

const addToDB = haircut => {
    const { description, price } = haircut;
    return Haircut.create({
        description: description,
        price: price,
    });
};

const getOneDB = id => {
    return Haircut.findAll({
        where: {
            ids: id,
        },
    });
};

module.exports = {
    getList,
    addToDB,
    getOneDB,
};
