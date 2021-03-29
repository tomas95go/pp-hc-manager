'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Haircut extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Haircut.init(
        {
            description: DataTypes.STRING,
            price: DataTypes.INTEGER,
            active: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'Haircut',
        }
    );
    return Haircut;
};
