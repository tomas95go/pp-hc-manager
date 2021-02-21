const {
    getAllHaircutsDB,
    addNewHaircutDB,
    updateHaircutDB,
    selectIndividualDB,
    deleteHaircutDB,
} = require('../../models/haircut-crud/haircut-crud');

const listAllHaircuts = async (req, res) => {
    try {
        const getHaircutList = await getAllHaircutsDB();
        const haircutList = getHaircutList.map(haircutData => {
            return {
                number: haircutData.dataValues.number,
                description: haircutData.dataValues.description,
                price: haircutData.dataValues.price,
            };
        });

        res.status(200).json(haircutList);
    } catch (error) {
        console.log('Meh, an error: ', error);
    }
};

const addNewHaircut = (hcDescription, hcPrice) => {
    addNewHaircutDB(hcDescription, hcPrice);
};

const updateHaircut = async (id, req, res) => {
    const updatedData = await updateHaircutDB(id);
    const selectedIndividual = await selectIndividualDB(id);
    const newData = selectedIndividual.map(newHaircutData => {
        return {
            number: newHaircutData.dataValues.number,
            description: newHaircutData.dataValues.description,
            price: newHaircutData.dataValues.price,
        };
    });
    res.status(200).json(newData);
};

const deleteHaircut = async (id, req, res) => {
    const softDelete = await deleteHaircutDB(id);
    res.status(200).json('Se elimino con extio');
};

module.exports = {
    listAllHaircuts,
    addNewHaircut,
    updateHaircut,
    deleteHaircut,
};
