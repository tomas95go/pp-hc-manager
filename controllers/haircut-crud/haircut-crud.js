const {
    getHaircutList,
    addNewHaircut,
    selectHaircut,
    updateHaircut,
} = require('../../models/haircut-crud/haircut-crud');

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
    const { id, hcDescription, hcPrice } = req.body;
    console.log(id, hcDescription, hcPrice);
    await updateHaircut(id, hcDescription, hcPrice);
    const updatedHaircut = await selectHaircut(id);
    res.status(200).json(updatedHaircut);
};

const handleHaircutSelect = async (req, res) => {
    const { id } = req.params;
    const haircut = await selectHaircut(id);
    res.status(200).json(haircut);
};

module.exports = { handleHaircutList, handleHaircutAdd, handleHaircutEdit, handleHaircutSelect };
