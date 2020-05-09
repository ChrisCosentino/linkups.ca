const express = require('express');
const router = express.Router();

//Item Model
const Link = require('../../models/Link');


// @route   GET api/links
// @desc    Get all links
// @access  Public
router.get('/', (req, res) => {
    Link.find()
        .then(links => res.json(links))
});

// @route   POST api/links
// @desc    Create A Post request linklist
// @access  Public
router.post('/', (req, res) => {
    const newLink = new Link({
        username: req.body.username,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        soundcloud: req.body.soundcloud,
        youtube: req.body.youtube,
        linkedin: req.body.linkedin,
        facebook: req.body.facebook,
        snapchat: req.body.snapchat,
        reddit: req.body.reddit,
        twitch: req.body.twitch,
        pinterest: req.body.pinterest
    });

    newLink.save()
        .then(link => res.json(link))
        .catch(err => res.status(404).json({error: `${err}`}))
});

router.get('/:username', (req, res) => {
    Link.findOne({ username: req.params.username })
        .then(link => {
            if(link.length){
                res.json(link)
            }else{
                res.status(404).json({error: 'username not found'})
            }
        })
        .catch(err => res.status(404).json({error: `${err}`}))
})


module.exports = router;