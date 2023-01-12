const {DataTypes, Model } = require('sequelize');
var sequelize = require('../database.js');

class PersonModel extends Model {}

PersonModel.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    work_place: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // create_date: {
    //     type: DataTypes.DATE,
    //     allowNull: false
    // }
}, {
  sequelize,
  modelName: 'Person'
});

module.exports = PersonModel