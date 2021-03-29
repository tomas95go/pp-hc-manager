const { Haircut } = require('../index');
const { Op } = require('sequelize');

const getList = () => {
    return Haircut.findAll({
        where: {
            active: 1,
        },
    });
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
            active: 1,
        },
    });
};

const getMultipleDB = haircutsIds => {
    return Haircut.findAll({
        where: {
            id: {
                [Op.in]: haircutsIds,
            },
            active: 1,
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
                active: 1,
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

const sdeleteMultipleDB = haircutsIds => {
    return Haircut.update(
        {
            active: 0,
        },
        {
            where: {
                id: {
                    [Op.in]: haircutsIds,
                },
                active: 1,
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
    getMultipleDB,
    sdeleteMultipleDB,
};
