const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const authorSchema=new mongoose.Schema({
    publisherName: String,
    hq: String
}, {timestamps: true} )

module.exports = mongoose.model( 'myPublisher',authorSchema )
