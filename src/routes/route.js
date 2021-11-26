const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

const weatherController= require("../controllers/controller")


router.get("/weather", weatherController.weatherOfLondon)
router.get("/temp", weatherController.tempOfLondon)
router.get("/citytemp", weatherController.getWeatherOfCities)

module.exports = router;