const express = require('express');
const router = express.Router();
const {
    list,
    handleIndividualAdd,
    update,
    sdelete,
    selectOne,
    handleMultipleAdd,
    selectMultiple,
    handleMultipleEdits,
    handleMultipleDeletes,
} = require('../../controllers/haircut');

router.get('/list', (req, res) => {
    list(req, res);
});

router.post('/add', (req, res) => {
    handleIndividualAdd(req, res);
});

router.post('/add/multiple', (req, res) => {
    handleMultipleAdd(req, res);
});

router.get('/edit/:id', (req, res) => {
    selectOne(req, res);
});

router.put('/edit/:id', (req, res) => {
    update(req, res);
});

router.get('/edit/multiple', (req, res) => {
    selectMultiple(req, res);
});

router.put('/edit/multiple', (req, res) => {
    handleMultipleEdits(req, res);
});

router.get('/delete/:id', (req, res) => {
    selectOne(req, res);
});

router.put('/delete/:id', (req, res) => {
    sdelete(req, res);
});

router.get('/delete/multiple', (req, res) => {
    selectMultiple(req, res);
});

router.put('/delete/multiple', (req, res) => {
    handleMultipleDeletes(req, res);
});

module.exports = router;
