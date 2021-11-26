const axios = require("axios");
const weatherOfLondon = async function (req, res) {
    try {
        let option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=152c53a2a3ffceb3af6c4cfa1353640c`
        };
        let london = await axios(option)
        console.log(london)
        res.status(200).send({ msg: " Successfully _feteched_data", data: london.data });
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
};


//---------------------------------------------------Question 2---------------------------------------------//

// const axios = require("axios");
const tempOfLondon = async function (req, res) {
    try {
        let option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=london&appid=152c53a2a3ffceb3af6c4cfa1353640c`
        };
        let london = await axios(option)
        console.log(london.data.main.temp)
        res.status(200).send({ msg: " temp_of_london", data: london.data.main.temp });
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
};
//--------------------------------------------------- Question 3--------------------------------------------//



const getWeatherOfCities = async function (req, res) {
    try {
        let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = [];
        let option;
        for (i = 0; i < city.length; i++) {
            option = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=152c53a2a3ffceb3af6c4cfa1353640c`

            };
            london = await axious(options)
            arr.push({ "city": city[i], "temp_of_city": london.data.main.temp })
        }

        let cities = arr.sort(function (a, b) { return parseFloat(a.temp) - parse(a.temp); })
        res.status(200).send({ msg: "Successfully fetched data", "temp_of_london": cities });
    }

    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
};
module.exports.weatherOfLondon = weatherOfLondon;
module.exports.tempOfLondon = tempOfLondon;
module.exports.getWeatherOfCities = getWeatherOfCities;
