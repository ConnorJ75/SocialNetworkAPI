const { Thought, User, Reaction } = require('../models');
const {Types} = require('mongoose');

const ThoughtController = {
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
      } 
      catch (err) {
        res.status(500).json(err);
      }
    },
    async createThought(req, res) {
      try {
        const thought = await Thought.create(req.body);
        res.json(thought);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    async getThoughtById(req,res) {
      try {
          const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');
    
          if (!user) {
            return res.status(404).json({ message: 'No student with that ID' })
          }
    
          res.json({user});
      } 
      catch (err) {
          console.log(err);
          return res.status(500).json(err);
      }
  },

}

module.exports = ThoughtController;