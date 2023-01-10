const express = require('express')
const app = express()
const {DataTypes, Model } = require('sequelize');
const db = require('./database/database.js')
const CompanyModel = require('./database/models/company')
const PersonModel = require('./database/models/person')


function start(){
    try {
        db.authenticate();
        db.sync({ force: true });
        console.log('Connection has been established successfully.');
        startApp()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


function startApp(){
    app.get('/', function(req, res){
        res.send('Hello world')
    })
    
    
    app.listen(3000, function(){
        console.log('Server started at http://localhost:3000')
    })
}


start()