const { getHaircutList, addNewHaircut } = require('../../models/haircut-crud/haircut-crud');

const handleHaircutList = async (req, res) => {
    const haircutList = await getHaircutList();
    res.status(200).json(haircutList);
};

const handleHaircutAdd = async (req, res) => {
    const { hcDescription, hcPrice } = req.body;
    const newHaircut = await addNewHaircut(hcDescription, hcPrice);
    res.status(200).json(newHaircut);
};

const handleHaircutEdit = async (req, res) => {
    const { id } = req.body;
    res.status(200).json(id);
};

module.exports = { handleHaircutList, handleHaircutAdd, handleHaircutEdit };
