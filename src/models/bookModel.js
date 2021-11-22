const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const bookSchema= new mongoose.Schema({


    bookName: {
        type: String,
        required: true
    },
       author: {
        type: ObjectId,
        ref: 'myAuthor'
    },
    tags: [ String ], 
    year: {type: Number, default: 2021},
    isPublished: {
        type: Boolean,
        default: false
    },
    publisher:{
        type:ObjectId,
        ref: "myPublisher"
    },
    prices: {
        indianPrice: String,
        europeanPrice: String,
              
    },
    sales: {
        type: Number,
        default : 0
    },
    completionDate: {type: Date, default: Date.now }, 
    summary: mongoose.Schema.Types.Mixed,

    isDeleted : {type: Boolean, default: false}

}, {timestamps: true} )

module.exports = mongoose.model( 'myBook', bookSchema ) 

