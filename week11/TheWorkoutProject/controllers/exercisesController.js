const Exercise = require('../models/exercisesModel');

const exercisesController = {
  async getAll(req, res) {
    try {
      const exercises = await Exercise.getAll();
      res.json(exercises);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getById(req, res) {
    try {
      const id = req.params.id;
      const exercise = await Exercise.getById(id);
      res.json(exercise);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Add other controller methods as needed
};

module.exports = exercisesController;
