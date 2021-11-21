const mongoose=require('mongoose')

const bookAssignSchema= new mongoose.Schema({



    name: {
        type: String,
        required: true
    },
    
    
    author_id: {
        type:String,
        required:true
    },
    
    prices: Number,
    ratings:Number
 },
  {timestamps: true} )

module.exports = mongoose.model( 'bookname', bookAssignSchema ) 

