const express = require('express');
const router = express.Router();
const haircutRoutes = require('./api/haircuts');

router.use('/haircut', haircutRoutes);

module.exports = router;
