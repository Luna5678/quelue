const express = require('express');
const { nextTick } = require('process');
const router = express.Router();

const { Show, Episode, User } = require('../models');

// index - for page with full Shows list
router.get('/', async (req, res, next) => {
    try {
        const allShows = await Show.find({});
        const context = {
            shows: allShows,
        };
        return res.render('shows/index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// create
router.post('/', async (req, res, next) => {
    try { 
        const foundUser = await User.findById('61087e63a52d95573687ff93'); 
        const showId = req.body.name;
        console.log(showId, foundUser, 'found them');
        foundUser.showQueue.push(showId);
        // grab the id of the series and then .populate('showqueue')
        // push the id to the showQueue id array 
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }

});


// show - for page with an individual Show displayed
router.get('/:id', async (req, res, next) => {
    try {
        const foundShow = await Show.findById(req.params.id);
        // episodeList = find episodes with same parentShow id
        const episodeList = await Episode.find({ parentShow: req.params.id });
        const user = await User.findById('61087e63a52d95573687ff93');
        user.showQueue = foundShow._id;
        // add episodeList to context
        // 


        const context = {
            show: foundShow,
            episodes: episodeList,
        };
        console.log(foundShow, 'here', user);
        return res.render('shows/show', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;