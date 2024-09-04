const express = require("express");
const router = express.Router();

// Import Controller
//const{getBooks,getBook_genre,createBook,updateBook,deleteBook}=require('../controllers/bookController')
const{getBooks,getBook_genre,createBook,updateBook,deleteBook}=require('../controllers/bookController')
// APIs Routing Config
router.get('/books',getBooks);
router.get('/books/:genre',getBook_genre);
router.post('/books',createBook);
router.put('/books/:id',updateBook);
router.delete('/books/:id',deleteBook);

// Export router
module.exports=router;