const express = require('express');
const router = express.Router();
const {
    list,
    handleIndividualAdd,
    handleIndividualUpdate,
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

router.post('/add/individual', (req, res) => {
    handleIndividualAdd(req, res);
});

router.post('/add/multiple', (req, res) => {
    handleMultipleAdd(req, res);
});

router.get('/edit/individual/:id', (req, res) => {
    selectOne(req, res);
});

router.put('/edit/individual/:id', (req, res) => {
    handleIndividualUpdate(req, res);
});

router.get('/edit/multiple', (req, res) => {
    selectMultiple(req, res);
});

router.put('/edit/multiple', (req, res) => {
    handleMultipleEdits(req, res);
});

router.put('/delete/individual/:id', (req, res) => {
    sdelete(req, res);
});

router.put('/delete/multiple', (req, res) => {
    handleMultipleDeletes(req, res);
});

module.exports = router;
