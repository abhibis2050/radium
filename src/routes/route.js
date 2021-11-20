 const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel")
const bookModel= require("../models/bookModel")

// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.post('/createUser',  UserController.createUser  );
// router.get('/getAllUsers',  UserController.getUsersData  );

router.post('/createBook',  BookController.createBook  );
router.get('/bookList',  BookController.bookList);
router.post('/getBooksInYear',  BookController. getBooksInYear);
router.post('/getParticularBooks',  BookController.getParticularBooks);
router.get('/getXINRBooks',  BookController.getXINRBooks);
router.get('/RandomBooks',  BookController.RandomBooks);



module.exports = router;