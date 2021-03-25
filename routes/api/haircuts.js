const express = require('express');
const router = express.Router();
const { list, add, update, sdelete, selectOne, addMultiple } = require('../../controllers/haircut');

router.get('/list', (req, res) => {
    list(req, res);
});

router.post('/add', (req, res) => {
    add(req, res);
});

router.post('/add/multiple', (req, res) => {
    addMultiple(req, res);
});

router.get('/edit/:id', (req, res) => {
    selectOne(req, res);
});

router.put('/edit/:id', (req, res) => {
    update(req, res);
});

router.get('/delete/:id', (req, res) => {
    selectOne(req, res);
});

router.put('/delete/:id', (req, res) => {
    sdelete(req, res);
});

module.exports = router;
