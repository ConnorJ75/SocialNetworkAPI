const { User } = require('../models');

const UserController = {
    async getUsers(req,res) {
        User.find({})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },
    async createUser(req,res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } 
        catch (err) {
            res.status(500).json(err);
        }
    },
}
module.exports = UserController;