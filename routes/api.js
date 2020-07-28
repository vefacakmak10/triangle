const express = require('express');

const BlogPost = require('../models/blogPost');
const User = require('../models/user');

const router = express.Router();

router.get('/api', (req, res) => {

    BlogPost.find({     })
    .then((data) => {
        console.log('Data', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error', error);
    });
});

router.post('/api/user', (req, res) => {
    const data = req.body;
    console.log(data)

    const userSave = new User(data);
    

    userSave.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'user  gönderildi!!!!!!'
        });
    });
});


module.exports = router;