const express = require('express');
const haircutRouter = express.Router();
const {
    handleHaircutList,
    handleHaircutAdd,
    handleHaircutEdit,
} = require('../../controllers/haircut-crud/haircut-crud');

haircutRouter.get('/home', (req, res) => {
    res.render('layout/layout');
});

haircutRouter.get('/list', (req, res) => {
    handleHaircutList(req, res);
});

haircutRouter.post('/add', (req, res) => {
    handleHaircutAdd(req, res);
});

haircutRouter.put('/edit', (req, res) => {
    handleHaircutEdit(req, res);
});

module.exports = haircutRouter;
