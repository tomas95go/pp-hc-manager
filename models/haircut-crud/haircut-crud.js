const Haircut = require('../../config/db');

const getHaircutList = () => {
    return Haircut.findAll({
        attributes: [['id', 'number'], 'description', 'price'],
    });
};

const addNewHaircut = (hcDescription, hcPrice) => {
    const newHaircut = Haircut.create({
        description: hcDescription,
        price: hcPrice,
    });
    return newHaircut;
};

const selectHaircut = id => {
    return Haircut.findAll({
        where: {
            id: id,
        },
    });
};

const updateHaircut = (id, newDescription, newPrice) => {
    return Haircut.update(
        {
            description: newDescription,
            price: newPrice,
        },
        {
            where: {
                id: id,
            },
        }
    );
};

module.exports = {
    getHaircutList,
    addNewHaircut,
    selectHaircut,
    updateHaircut,
};
