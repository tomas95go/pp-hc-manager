const { Haircut } = require('../index');

const getList = () => {
    return Haircut.findAll();
};

const addToDB = haircut => {
    const { description, price } = haircut;
    return Haircut.create({
        descriptions: description,
        prices: price,
    });
};

module.exports = {
    getList,
    addToDB,
};
