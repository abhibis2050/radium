const BookModel= require("../models/bookModel.js")
const mongoose= require("mongoose")
// const bookModel = require("../models/bookModel.js")

const createBook = async function (req, res) {
    const book=req.body
    const savedBook=await BookModel.create(book)
    res.send({msg:savedBook})
}

const bookList = async function(req,res){
    const bl= await bookModel.find().select({bookName: 1, authorName: 1})
    res.send({msg: bl})
}

const getBooksInYear = async function(req,rea){
    const d = req.body.year
    const biy = await bookModel.find({ year: d })
    res.send( { msg : biy})
}
const getParticularBooks= async function (req, res) {
    const z = req.body.particular
    const gpb = await bookModel.find( { bookName: z })
        res.send({msg: gpb})        
    }

const getXINRBooks = async function(req,res){
    let x = await bookModel.find({"prices.indianPrice" : { $in : ["100","200","500"]}});
    res.send({msg : x})
    console.log(x)
}

const RandomBooks = async function(req,res){
    const y =await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt : 500}}]})
    res.send({msg : y})
}
module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks =getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.RandomBooks=RandomBooks