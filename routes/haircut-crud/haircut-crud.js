const express = require('express');
const haircutRouter = express.Router();
const { handleHaircutList } = require('../../controllers/haircut-crud/haircut-crud');

haircutRouter.get('/home', (req, res) => {
    res.render('layout/layout');
});

haircutRouter.get('/list', (req, res) => {
    handleHaircutList(req, res);
});

module.exports = haircutRouter;
