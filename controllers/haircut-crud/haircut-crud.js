const addNewHaircutDB = require("../../models/haircut-crud/haircut-crud");

const addNewHaircut = (hcDescription, hcPrice) => {
  console.log("This is from the controller: ", hcDescription, hcPrice);
  addNewHaircutDB(hcDescription, hcPrice);
};

module.exports = addNewHaircut;
