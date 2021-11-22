const authorModel= require("../models/authorModel.js")

const createAuthor= async function (req, res) {
    var at= req.body
    let atd = await authorModel.create(at)
    res.send({msg: atd})    
}


const getAuthors= async function (req, res) {
    let aat= await authorModel.find()
    res.send({data: aat})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthors= getAuthors