const express = require("express");
const addNewHaircut = require("../../controllers/haircut-crud/haircut-crud");
const haircutRouter = express.Router();

haircutRouter.get("/home", (req, res) => {
  res.render("layout/layout");
});

haircutRouter.post("/haircut-data", (req, res) => {
  const { hcDescription, hcPrice } = req.body;

  addNewHaircut(hcDescription, hcPrice);
  //res.json(req.body);
});

module.exports = haircutRouter;
