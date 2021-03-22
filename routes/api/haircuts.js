const express = require('express');
const router = express.Router();
const { list, add, update, sdelete } = require('../../controllers/haircut');

router.use('/list', (req, res) => {
    list(req, res);
});

router.use('/add', (req, res) => {
    add(req, res);
});

router.use('/update/:id', (req, res) => {
    const { id } = req.params;
    update(req, res, id);
});

router.use('/delete/:id', (req, res) => {
    const { id } = req.params;
    sdelete(req, res, id);
});

module.exports = router;
