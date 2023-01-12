const Person = require("../../database/models/person")


function savePerson(person){
    Person.create(person)
}

module.exports = savePerson