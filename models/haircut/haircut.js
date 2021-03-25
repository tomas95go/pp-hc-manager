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

module.exports = {
    getList,
    addToDB,
};
