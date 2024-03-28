const router = require('express').Router();

const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');
//GET and POST routes
router.route('/').get(getUsers).post(createUser);
//GET PUT and DELETE by id
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
//route for adding friend for a user
router.route('/:userId/friends/:friendId').post(addFriend);
//route for removing(deleting) a friend for a user
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;