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

//GET and POST routes
router.route('/').get(getThoughts).post(createThought);
//GET PUT and DELETE by id
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);
//create reaction for a thought route
router.route('/:thoughtId/reactions').post(createReaction);
//delete reaction for a thought route
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
