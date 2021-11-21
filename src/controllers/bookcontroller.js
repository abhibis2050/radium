const bookModel= require("../models/bookmodel.js")

const createbook= async function (req, res) {
    var data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})    
}


const getbookData= async function (req, res) {
    let bookUsers= await bookModel.find()
    res.send({msg: bookUsers})
}

// module.exports.createUser= createbook
// module.exports.getUsersData= getUserData

module.exports.createbook= createbook
module.exports.getbookData= getbookData