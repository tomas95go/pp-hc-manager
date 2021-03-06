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
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
    },
};
