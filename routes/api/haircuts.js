const express = require('express');
const router = express.Router();
const { list, add, update, sdelete, selectOne } = require('../../controllers/haircut');

router.get('/list', (req, res) => {
    list(req, res);
});

router.post('/add', (req, res) => {
    add(req, res);
});

router.get('/:id', (req, res) => {
    selectOne(req, res);
});

router.put('/edit/:id', (req, res) => {
    update(req, res);
});

router.put('/delete/:id', (req, res) => {
    const { id } = req.params;
    sdelete(req, res, id);
});

module.exports = router;
