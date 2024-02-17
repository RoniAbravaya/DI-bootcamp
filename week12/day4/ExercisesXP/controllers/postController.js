const db = require('../config/dbConfig');


// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await db('posts').select('*');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific post
exports.getPostById = async (req, res) => {
  try {
    const post = await db('posts').where({ id: req.params.id }).first();
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const [id] = await db('posts').insert(req.body);
    const post = await db('posts').where({ id }).first();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a post
exports.updatePost = async (req, res) => {
  try {
    const updated = await db('posts').where({ id: req.params.id }).update(req.body);
    if (updated) {
      const post = await db('posts').where({ id: req.params.id }).first();
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const deleted = await db('posts').where({ id: req.params.id }).del();
    if (deleted) {
      res.json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
