const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercisesController');

router.get('/', exercisesController.getAll);
router.get('/:id', exercisesController.getById);

// Add other routes as needed

module.exports = router;
