const Haircut = require('../../config/db');

const getAllHaircutsDB = () => {
    const getHaircutList = Haircut.findAll({
        attributes: [['id', 'number'], 'description', 'price'],
        where: {
            active: 1,
        },
    });

    return getHaircutList;
};

const addNewHaircutDB = async (hcDescription, hcPrice) => {
    const newHaircut = buildNewHaircut(hcDescription, hcPrice);
    try {
        await newHaircut.save();
    } catch (error) {
        console.log('Meh an error: ', error);
    }
};

const buildNewHaircut = (hcDescription, hcPrice) => {
    const newHaircut = Haircut.build({
        description: hcDescription,
        price: hcPrice,
    });
    return newHaircut;
};

const updateHaircutDB = id => {
    const haircutUpdate = Haircut.update(
        {
            description: 'updateHaircut!',
        },
        {
            where: {
                active: 1,
                id: id,
            },
        }
    );

    return haircutUpdate;
};

const selectIndividualDB = id => {
    const selectHaircut = Haircut.findAll({
        attributes: [['id', 'number'], 'description', 'price'],
        where: {
            active: 1,
            id: id,
        },
    });
    return selectHaircut;
};

const deleteHaircutDB = id => {
    const softDelete = Haircut.update(
        {
            active: 0,
        },
        {
            where: {
                active: 1,
                id: id,
            },
        }
    );

    return softDelete;
};

module.exports = {
    getAllHaircutsDB,
    addNewHaircutDB,
    updateHaircutDB,
    selectIndividualDB,
    deleteHaircutDB,
};
