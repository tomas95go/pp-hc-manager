const express = require('express');
const router = express.Router();
const haircutRoutes = require('./api/haircuts');
const home = require('./api/home');

router.use('/', home);

router.use('/haircut', haircutRoutes);

module.exports = router;
