const express = require('express')
const app = express()
const {DataTypes, Model } = require('sequelize');
const db = require('./database/database.js')
const CompanyModel = require('./database/models/company')
const PersonModel = require('./database/models/person')
const personRoutes = require('./routes/personRoutes.js')
const companyRoutes = require('./routes/companyRoutes.js')
const port = process.env.PORT || 3000


function start(){
    try {
        db.authenticate();
        db.sync();
        startApp()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


function startApp(){
    app.use(express.json())
    app.use('/api', personRoutes)
    app.use('/api', companyRoutes)

    app.use(express.static('public'))
    app.use('/css', express.static(__dirname + 'public/css'))
    app.use('/js', express.static(__dirname + 'public/js'))
    app.use('/logo', express.static(__dirname + 'public/logo'))
    
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/view/index.html')
    })
    app.listen(port, function(){
        console.log(`Server started at ${port}`)
    })
}


start()