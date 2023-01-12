const Company = require("../../database/models/company")


function saveCompany(company){
    Company.create(company)
}

module.exports = saveCompany