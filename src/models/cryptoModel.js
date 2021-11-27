const mongoose = require ("mongoose")
const axios = require("axios");
const cryptoModel = require('../models/cryptoModel')

const cryptoSchema = new mongoose.Schema ({

    symbol:{
        type:String,
        unique:true
    },
    name: {
        type: String,
        unique: true
    },

    marketCapUsd :{
        type:String
    },

    priceUsd : { 
        type : String
    }
},

    { timestrap: true }

)

module.exports = mongoose.model( 'crypto', cryptoSchema)
