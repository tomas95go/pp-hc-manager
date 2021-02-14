const {
    getAllHaircutsDB,
    addNewHaircutDB,
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
    console.log('This is from the controller: ', hcDescription, hcPrice);
    addNewHaircutDB(hcDescription, hcPrice);
};

module.exports = {
    listAllHaircuts,
    addNewHaircut,
};
