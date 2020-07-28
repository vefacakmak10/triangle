const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://erayaydin:5e78102ass@coffeecode.85b2p.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/coffee_code', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log('Mongoose baglandi!!!');
});


app.use(cors());
app.use(morgan('tiny'));
app.use('/', routes);




app.listen(PORT, console.log(`Server baslatildi ${PORT}`));