const addPerson = require('../services/person.js')


const postPerson = (req, res) => {
    console.log("post get")
    addPerson(req.body)
    res.send("Successful registration")
}

const lol = (req, res) =>{
    res.send("lol")
}

module.exports = {postPerson, lol}