'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const isDevLocal = process.env.NODE_ENV === 'development_local';
const { development_local, development_heroku } = require('../config/config');
const db = {};

let sequelize;
if (!isProduction && !isDevLocal) {
    sequelize = new Sequelize(development_heroku.uri, {
        database: development_heroku.database,
        username: development_heroku.username,
        password: development_heroku.password,
        dialect: development_heroku.dialect,
        protocol: development_heroku.protocol,
        host: development_heroku.host,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    });
}

if (isDevLocal) {
    sequelize = new Sequelize({
        dialect: `${development_local.dialect}`,
        storage: `${development_local.storage}`,
    });
}

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
