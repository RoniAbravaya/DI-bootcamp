const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBooksById,
  createBooks,
  updateBooks,
  deleteBooks,
} = require('../controllers/bookController.js');

// GET all posts
router.get('/', getAllBooks);

// GET a specific post
router.get('/:id', getBooksById);

// POST a new post
router.post('/', createBooks);

// PUT update a post
router.put('/:id', updateBooks);

// DELETE a post
router.delete('/:id', deleteBooks);

module.exports = router;
