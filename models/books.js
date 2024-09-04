const mongoose = require("mongoose");

// Define Schame wit timestamps and disable versionKey
const bookSchema=new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,require:true},
    published_year:{type:Number,require:true},
    genre:{type:String,require:true},
    available:{type:Boolean,require:true},
    
},{timestamps:true,versionKey:false});
// Define Model

// Export Model
module.exports=mongoose.model('Books',bookSchema)