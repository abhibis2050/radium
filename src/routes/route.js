const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel")
const bookModel= require("../models/bookmodel")

// const UserController= require("../controllers/userController")
const bookcontroller= require("../controllers/bookcontroller")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.post('/createUser',  UserController.createUser  );
// router.get('/getAllUsers',  UserController.getUsersData  );
router.post('/createbook',  bookcontroller.createbook  );
router.get('/getAllbook',  bookcontroller.getbookData  );


module.exports = router;