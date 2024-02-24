// routes/helping.js

const express = require('express');
const router = express.Router();
const { submitHelpingForm } = require('../controllers/formController');
const { getHelpingDataByLocation } = require('../controllers/helpingController');

// Handle POST requests to /api/helping
router.post('/', submitHelpingForm);

router.get('/', getHelpingDataByLocation);

module.exports = router;
