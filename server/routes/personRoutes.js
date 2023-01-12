const express = require('express')
const {postPerson, lol} = require('../controllers/personController')

const router = express.Router();


router.get('/lol', (req, res) => {
    res.send("lol");
});
router.post('/person', postPerson)


module.exports = router