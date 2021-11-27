const axios = require("axios");
const cryptoModel = require("../models/cryptoModel");
const mongoose = require ("mongoose")

const getTopCryptoCoins = async function (req,res){
    try {
        let option = {
            method : "get",
            url : "api.coincap.io/v2/assets",
            header : {
                authorization:"bearer f0b0f485-36c5-4120-a61f-62b9856a3d8a"
            }

        }
        let response = await axios (option)

        let coin = response.data.data

        for (i=0;i<coins.length;i++){
            symbols = coins[i].symbol,
            marketCapUsd = coins[i].marketCapUsd 
            priceUsd = coins[i].priceUsd

        }
        await cryptoModel.findOneAndUpdate ({symbol:coins[i].symbol},coins[i],{upsert : true , new : true});
    

    coins.sort(function(a,b){
       return b.changePercent24Hr - a.changePercent24Hr; 
    });
    res.status(500).send({ status:true, data: coins })
}
catch (err) {
        console.log(err.message)
        res.status(500).send({ status:false , msg : "Server Error" })
    }
}

module.exports.getTopCryptoCoins = getTopCryptoCoins;