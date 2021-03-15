'use strict';

const { Sequelize } = require('sequelize');
const isProduction = process.env.NODE_ENV === 'producton';
const { development } = require('../config/config');
let db;
if (!isProduction) {
    db = new Sequelize({
        dialect: development.dialect,
        storage: development.storage,
    });
}

module.exports = db;
