const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LoggedinSchema = new Schema({
    
    email: String,
    password: String,
    isAuthenticated:Boolean ,
});

const  Loggedin = mongoose.model(' Loggedin',  LoggedinSchema);

module.exports =  Loggedin;