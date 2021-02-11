const Haircut = require("../../config/db");

const addNewHaircutDB = async (hcDescription, hcPrice) => {
  const newHaircut = buildNewHaircut(hcDescription, hcPrice);
  try {
    await newHaircut.save();
  } catch (error) {
    console.log("Meh an error: ", error);
  }
};

const buildNewHaircut = (hcDescription, hcPrice) => {
  const newHaircut = Haircut.build({
    description: hcDescription,
    price: hcPrice,
  });
  return newHaircut;
};

module.exports = addNewHaircutDB;
