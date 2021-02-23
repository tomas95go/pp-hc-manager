const express = require('express');
const {
    listAllHaircuts,
    addNewHaircut,
    updateHaircut,
    deleteHaircut,
} = require('../../controllers/haircut-crud/haircut-crud');
const haircutRouter = express.Router();

haircutRouter.get('/home', (req, res) => {
    res.render('layout/layout');
});

haircutRouter.get('/haircutList', (req, res) => {
    const hcList = listAllHaircuts(req, res);
    return hcList;
});

haircutRouter.post('/haircut-data', (req, res) => {
    const { hcDescription, hcPrice } = req.body;
    addNewHaircut(hcDescription, hcPrice, req, res);
});

haircutRouter.put('/haircut-edit', (req, res) => {
    const { id } = req.body;
    updateHaircut(id, req, res);
});

haircutRouter.put('/haircut-delete', (req, res) => {
    const { id } = req.body;
    deleteHaircut(id, req, res);
});

module.exports = haircutRouter;
