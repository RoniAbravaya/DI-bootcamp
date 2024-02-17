const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');

// GET all posts
router.get('/', getAllPosts);

// GET a specific post
router.get('/:id', getPostById);

// POST a new post
router.post('/', createPost);

// PUT update a post
router.put('/:id', updatePost);

// DELETE a post
router.delete('/:id', deletePost);

module.exports = router;
