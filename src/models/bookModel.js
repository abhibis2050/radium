const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema ({

  
    bookName: {
        type: String,
        required: true
    },

    authorName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        default: 2021
    },

    isPublished: {
        type: Boolean,
        default: false
    },

    prices: {
        indianPrice: String,
        europeanPrice: String
    },

    tags: [String],
    totalPages: Number,
    stockAvailable:{
        type:Boolean,
        default:false}
   
},

    { timestrap: true }

)

module.exports = mongoose.model( 'BookAssign', bookSchema)



// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging