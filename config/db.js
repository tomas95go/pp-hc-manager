const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/home/tommy/Documents/Projects/petProjects/HC-ManagerDB/hcmanagerdb',
});

const Haircut = sequelize.define(
    'Haircut',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true,
        },
        description: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        active: {
            type: DataTypes.INTEGER(1),
            defaultValue: 1,
        },
        creationDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
            field: 'creation_date',
        },
        modificationDate: {
            type: DataTypes.DATE,
            field: 'modification_date',
        },
        softDeleteDate: {
            type: DataTypes.DATE,
            field: 'soft_delete_date',
        },
    },
    {
        timestamps: false,
    }
);

/*const myAwait = async () => {
  try {
    await Haircut.sync();
    console.log("Devolviendo mi promesita: ", Sequelize.NOW);
  } catch (error) {
    console.log("Meh, an error: ", error);
  }
};

myAwait();*/

/*const militaryHC = Haircut.build({
  description: "Military Haircut",
  price: 1500,
});
*/
/*const saveData = async () => {
  try {
    await militaryHC.save();
    console.log("I did it mom! I interacted with a database");
  } catch (error) {
    console.log("Meh, an error: ", error);
  }
};*/

//saveData();

module.exports = Haircut;
