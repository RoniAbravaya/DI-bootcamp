// controllers/packingController.js

const db = require('../config/knex');

exports.getPackingDataByLocation = async (req, res) => {
    const { location } = req.query;

    try {
        const packingData = await db.select().from('packing').where('location', location);
        res.status(200).json(packingData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
