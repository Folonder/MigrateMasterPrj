const {DataTypes, Model } = require('sequelize');
var sequelize = require('../database.js');

class PersonModel extends Model {}

PersonModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    work_place: {
        type: DataTypes.STRING,
        allowNull: true
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