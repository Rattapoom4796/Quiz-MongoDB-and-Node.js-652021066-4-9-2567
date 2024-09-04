// Import Model
const express = require("express")
const Books =require("../models/books");


// Function add and export
exports.createBook = async(req,res)=>{
    const{title,author,published_year,genre,available}=req.body;
    const books = new Books({title,author,published_year,genre,available});
    try{
        const newbook = await books.save();
        res.status(201).json(newbook);
    }catch(err){
        res.status(400).json({message:err.message});
    }
}
// Function update and export
exports.updateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const books = await Books.findById(id);
        if (!books) return res.status(404).json({ message: 'Book not found' });
        const data = { $set: req.body };
        await Books.findByIdAndUpdate(id, data ); 
        res.json({ message: 'Book update successfully' });
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};
// Function delete and export
exports.deleteBook = async (req, res) => {
    try {
        const {id} = req.params;
        const books = await Books.findById(id);
        if (!books) return res.status(404).json({ message: 'Book not found' });
        await Books.findByIdAndDelete(id); 
        res.json({ message: 'Book deleted successfully' });
    } catch (err) { 
        res.status(400).json({ message: err.message }); 
    }
};
// Function get all data and export
exports.getBooks = async(req,res)=>{
    try{
        const books = await Books.find();
        res.status(200).json(books);
    }catch(error){res.status(500).json({message:error.message});
   }
};
// Function get data by genre and export
exports.getBook_genre = async(req,res)=>{
    try{
        const{genre}=req.params;
        const books = await Books.find({genre});
        if(!books)return res.status(404).json({message: "Book not found"});
        res.json(books);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};