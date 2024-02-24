
const express = require('express');
const router = express.Router();
const { submitPackingForm } = require('../controllers/formController');
const { getPackingDataByLocation } = require('../controllers/packingController');
const packingController = require('../controllers/packingController');

// Handle POST requests to /api/packing
router.post('/', submitPackingForm);
router.get('/', getPackingDataByLocation);
router.get('/', packingController.getPackingDataByLocation);

module.exports = router;