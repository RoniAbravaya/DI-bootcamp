// routes/cooking.js

const express = require('express');
const router = express.Router();
const { submitCookingForm } = require('../controllers/formController');
const { getCookingDataByLocation } = require('../controllers/cookingController');
const dataController = require('../controllers/dataController');

// Handle POST requests to /api/cooking
router.post('/', submitCookingForm);
router.get('/', getCookingDataByLocation);
// router.get('/cooking', dataController.getCookingDataByLocation);

module.exports = router;
