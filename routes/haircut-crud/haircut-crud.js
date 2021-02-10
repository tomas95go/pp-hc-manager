const express = require("express");
const haircutRouter = express.Router();

haircutRouter.get("/home", (req, res) => {
  res.render("layout/layout");
});

haircutRouter.post("/haircut-data", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = haircutRouter;
