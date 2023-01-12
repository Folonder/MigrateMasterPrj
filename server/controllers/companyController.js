const addCompany = require('../services/company.js')


const postCompany = (req, res) => {
    console.log("post get")
    addCompany(req.body)
    res.send("Successful registration")
}


module.exports = {postCompany}