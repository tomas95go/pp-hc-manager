const { getHaircutList } = require('../../models/haircut-crud/haircut-crud');

const handleHaircutList = async (req, res) => {
    const haircutList = await getHaircutList();
    res.status(200).json(haircutList);
};

module.exports = { handleHaircutList };
