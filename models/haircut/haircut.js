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
    return Haircut.findOne({
        where: {
            id: id,
        },
    });
};

const updateDB = haircut => {
    const { id, description, price } = haircut;
    return Haircut.update(
        {
            description: description,
            price: price,
        },
        {
            where: {
                id: id,
            },
        }
    );
};

const sdeleteDB = id => {
    return Haircut.update(
        {
            active: 0,
        },
        {
            where: {
                id: id,
            },
        }
    );
};

module.exports = {
    getList,
    addToDB,
    getOneDB,
    updateDB,
    sdeleteDB,
};
