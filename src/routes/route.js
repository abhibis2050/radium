const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const publisherController= require("../controllers/publishercontroller")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/myAuthor',  authorController.createAuthor  );
router.get('/myAuthor',  authorController.getAuthors  );

// Books API
router.post('/books',  BookController.createBook  );
router.get('/books',  BookController.getBooks  );
router.get('/selectgetbooks',  BookController. selectgetbooks  );

// Publisher API
router.post('/myAPublisher',  publisherController.createPublisher  );
// router.get('/myPublisher',  publisherController.getPublisher  );

module.exports = router;