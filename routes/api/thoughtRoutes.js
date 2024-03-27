const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getThoughtById,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);



module.exports = router;
