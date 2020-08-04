const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MoviePostSchema = new Schema({
   name : String,
   number :  Number ,
   izlenme: Number,
    
});

const MoviePost = mongoose.model('MoviePost', MoviePostSchema);

module.exports = MoviePost;