const bookModel = require("../models/bookModel.js");
const mongoose = require("mongoose");
const authorModel= require("../models/authorModel.js");
const publisherModel= require("../models/publisherModel.js"); 

const createBook = async function (req, res) {
  const book = req.body;
  const authorids = req.body.author;
  const authorFromRequest=await authorModel.findById(authorids)
  const publisherids=req.body.publisher;
  const publisherFromRequest=await publisherModel.findById(publisherids)
  if(authorFromRequest&&publisherFromRequest){
     let savedBook = await bookModel.create(book);
  res.send({ msg: savedBook })
} else{
  res.send("Invalid ID")
}
};

const getBooks = async function (req, res) {
  let ab = await bookModel.find().populate('author');
  res.send({ msg: ab });
};

const selectgetbooks = async function(req,res){
let allBooksprop = await bookModel.find().populate("author",{"id":1,"authorName": 1,"age":1})
res.send({msg:allBooksprop})
}

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports. selectgetbooks =  selectgetbooks;


