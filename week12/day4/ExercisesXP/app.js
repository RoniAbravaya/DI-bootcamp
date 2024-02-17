const express = require('express');
const http = require('http');
const bp = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/books', bookRoutes);
app.use('/', express.static(__dirname + '/public'));

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Start the HTTP server
app.listen(PORT, () => {
  console.log(`HTTP server is running on port ${PORT}`);
});
