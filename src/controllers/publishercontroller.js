const publisherModel= require("../models/publisherModel.js")

const createPublisher= async function (req, res) {
    var pb= req.body
    let apb = await publisherModel.create(pb)
    res.send({msg: apb})    
}


// const getPublisher =async function (req,res){
//     let pb = await bookModel.find()
//     res.send({msg:pb})
// }

module.exports.createPublisher= createPublisher
// module.exports.getPublisher=getPublisher