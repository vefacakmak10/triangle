const express = require('express');

const moviePost = require('../models/moviePost');
const User = require('../models/user');
const Loggedin = require('../models/loggedin');


const router = express.Router();


router.get('/movie', (req, res) => {

    moviePost.find({     })
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
router.post('/movie', (req, res) => {
    const data = req.body;
    console.log(data)

    const newMovie = new moviePost(data);
    

    newMovie.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'film  gönderildi!!!!!!'
        });
    });
});
router.post('/loggedin', (req, res) => {
    const data = req.body;
    console.log(data)

    const newMovie = new Loggedin(data);
    

    newMovie.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'film  gönderildi!!!!!!'
        });
    });
});

router.put('/loggedin/:id', function(req, res, next) {
    Loggedin.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });



router.get('/loggedin', (req, res) => {
    
    Loggedin.find({     })
    .then((data) => {
        console.log('Data', data);
        res.json(data);
        
        
    })
    .catch((error) => {
        console.log('error', error);
    });
});

router.get('/loggedin/:id', (req, res) => {
    
    Loggedin.findById(req.params.id)
    .then((data) => {
        console.log('Data', data);
        res.json(data);
        
        
    })
    .catch((error) => {
        console.log('error', error);
    });
   
});
 

1
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