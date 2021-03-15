'use strict';

const Sequelize = require('sequelize');
const isProduction = process.env.NODE_ENV === 'production';
const { development } = require('../config/config');
let db;
console.log(development.storage);
if (!isProduction) {
    db = new Sequelize({
        dialect: development.dialect,
        storage: development.storage,
    });
}

module.exports = db;
