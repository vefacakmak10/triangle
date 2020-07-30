const express = require('express');

const BlogPost = require('../models/blogPost');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {

    BlogPost.find({     })
    .then((data) => {
        console.log('Data', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error', error);
    });
});

router.post('/user', (req, res) => {
    const data = req.body;
    console.log(data)

    const newUser = new User(data);
    

    newUser.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'user  gönderildi!!!!!!'
        });
    });
});

router.get('/user', (req, res) => {

    User.find({     })
    .then((data) => {
        console.log('Data', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error', error);
    });
});


module.exports = router;