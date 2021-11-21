const BookModel = require("../models/bookassign");
const AuthorModel = require("../models/authorModel");
const mongoose = require("mongoose");

const createBook = async function (req, res) {
  const book = req.body;
  const savedBook = await BookModel.create(book);
  res.send({ msg: savedBook });
};
const createAuthor = async function (req, res) {
  const author = req.body;
  const savedAuthor = await AuthorModel.create(author);
  res.send({ msg: savedAuthor });
};

const booksByChetanBhagat = async function (req, res) {
  let cbBooks = await AuthorModel.find({author_name:"Chetan Bhagat"});
  let authorID = cbBooks[0].author_id
  let bookfind=await BookModel.find({author_id:authorID})
  res.send({ msg: bookfind });
};
let updateprice = async function(req,res){
  let ai = await BookModel.findOne({name:"Two states"}).select({author_id: 1})
  let aid =  ai.author_id
  let up = await BookModel.findOneAndUpdate({"author_id":aid},{price:100},{new: true})
  let an = await AuthorModel.findOne({"author_id":aid})
  let rex = { "author_name":an.author_name,"price":up.price}
  res.send(rex)
}

let fb = async function(req,res) {
  let ad = await BookModel.find ({ price: {$gte : 50 ,$lte : 100}})

  let aname = []

  for(i=0;i<ad.length;i++){
    let authorids = ad[i].author_id
    let resultobjs = await AuthorModel.findOne({"authod_id" : authorids})
    aname.push(resultobjs.author_name)
  }
function uniqeonly(value,index,self){
  return self.indexOf(value) == index
}
let final = aname.filter(uniqeonly)
res.send(final)
}

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.booksByChetanBhagat = booksByChetanBhagat;
module.exports.updateprice = updateprice;
module.exports.fb = fb;
