const express = require('express');

const BlogPost = require('../models/blogPost');

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
router.get('/api/name', (req, res) => {
    const data = {
        username: 'cagan',
        age: 25
    };
    res.json(data);
});



module.exports = router;