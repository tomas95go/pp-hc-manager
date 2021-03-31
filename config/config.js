if (process.env.NODE_ENV !== 'development_heroku') {
    require('dotenv').config();
}

module.exports = {
    development_local: {
        dialect: process.env.DB_DIALECT_DEV,
        storage: process.env.DB_STORAGE_DEV,
    },
    development_heroku: {
        uri: process.env.DATABASE_URL,
        dialect: process.env.DATABASE_DIALECT,
        protocol: process.env.DATABASE_PROTOCOL,
    },
};
