const { Sequelize } = require('sequelize');

const checkEnviroment = process.env.NODE_ENV === 'production';

let dialect = '';
let storage = '';

if (!checkEnviroment) {
    console.log(`Enviroment: ${process.env.NODE_ENV}`);
    dialect = process.env.DB_DIALECT_DEV;
    storage = process.env.DB_STORAGE_DEV;
}

const sequelize = new Sequelize({
    dialect,
    storage,
});

module.exports = sequelize;
