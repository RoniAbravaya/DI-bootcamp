// controllers/packingController.js

const db = require('../config/knex');

exports.getCookingDataByLocation = async (req, res) => {
    const { location } = req.query;
  
    try {
      const cookingData = await db('cooking').where('location', location);
      res.status(200).json(cookingData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };