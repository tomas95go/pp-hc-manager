const express = require('express');
const Haircut = require('../../config/db');
const haircutRouter = express.Router();
const {
    handleHaircutList,
    handleHaircutAdd,
    handleHaircutEdit,
    handleHaircutSelect,
    handleHaircutDelete,
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

haircutRouter.get('/:id', (req, res) => {
    handleHaircutSelect(req, res);
});

haircutRouter.put('/delete', (req, res) => {
    handleHaircutDelete(req, res);
});

module.exports = haircutRouter;
