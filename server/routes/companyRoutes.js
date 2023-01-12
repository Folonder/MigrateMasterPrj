const express = require('express')
const {postCompany} = require('../controllers/companyController')

const router = express.Router();


router.post('/company', postCompany)


module.exports = router