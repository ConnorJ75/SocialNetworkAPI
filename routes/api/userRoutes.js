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

router.route('/').get(getUsers).post(createUser);

module.exports = router;