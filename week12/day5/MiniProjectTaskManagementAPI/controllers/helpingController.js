// controllers/helpingController.js

const db = require('../config/knex');

exports.getHelpingDataByLocation = async (req, res) => {
    const { location } = req.query;

    try {
        const data = await db('helping').where('location', location);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
