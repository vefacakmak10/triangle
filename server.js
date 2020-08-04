const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI='mongodb+srv://admin:trabsuadmin123@trabsudb.ubr3i.mongodb.net/<MovieDB>?retryWrites=true&w=majority' ;
mongoose.connect(MONGODB_URI || 'mongodb://localhost/trabsu', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log('Mongoose baglandi!!!');
});
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, console.log(`Server baslatildi ${PORT}`));