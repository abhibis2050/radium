const express = require('express');

const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

const Cryptocontroller= require("../controllers/cryptoController")

router.get("/cryptocontroller", Cryptocontroller.getTopCryptoCoins)

module.exports = router;