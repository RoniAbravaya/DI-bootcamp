// controllers/dataController.js

const db = require('../config/knex');

exports.getData = async (req, res) => {
    try {
        // Fetch all data from all categories
        const [packingData, helpingData, cookingData] = await Promise.all([
            db.select().from('packing'),
            db.select().from('helping'),
            db.select().from('cooking')
        ]);
        
        res.status(200).json({ packingData, helpingData, cookingData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getPackingData = async (req, res) => {
    try {
        // Fetch only packing data
        const packingData = await db.select().from('packing');
        res.status(200).json(packingData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getHelpingData = async (req, res) => {
    try {
        // Fetch only helping data
        const helpingData = await db.select().from('helping');
        res.status(200).json(helpingData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getCookingData = async (req, res) => {
    try {
        // Fetch only cooking data
        const cookingData = await db.select().from('cooking');
        res.status(200).json(cookingData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
