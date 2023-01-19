const express = require('express')
const {postPerson, lol} = require('../controllers/personController')

const router = express.Router();


router.get('/lol', (req, res) => {
    console.log("lol request")
    res.send("lol");
});
router.post('/person', postPerson)


module.exports = router