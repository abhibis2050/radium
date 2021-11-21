const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel")
const BookModel= require("../models/bookassign")
const AuthorModel= require("../models/authorModel")

// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")



router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook', BookController.createBook);
router.post('/createAuthor',  BookController.createAuthor);
router.get('/booksByChetanBhagat',BookController.booksByChetanBhagat);
router.get('/updateprice',  BookController.updateprice);
router.get('/fb', BookController.fb);



module.exports = router;