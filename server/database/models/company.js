const {DataTypes, Model } = require('sequelize');
var sequelize = require('../database.js');

class CompanyModel extends Model {}

CompanyModel.init({
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
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    create_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
  sequelize,
  modelName: 'Company'
});

module.exports = CompanyModel