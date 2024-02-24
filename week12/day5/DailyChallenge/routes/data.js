const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const {
    submitPackingForm,
    submitHelpingForm,
    submitCookingForm,
} = require('../controllers/formController');

// Define routes to handle GET requests
router.get('/', dataController.getData);
router.get('/packing', dataController.getPackingData);
router.get('/helping', dataController.getHelpingData);
router.get('/cooking', dataController.getCookingData);
// Define routes to handle POST requests
router.post('/packing', submitPackingForm);
router.post('/helping', submitHelpingForm);
router.post('/cooking', submitCookingForm);

module.exports = router;
