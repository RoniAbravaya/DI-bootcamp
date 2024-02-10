// Import the express module
const express = require('express');

// Create an instance of an Express app
const app = express();



// Set up the app to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// Import the dataService module
const { fetchPosts } = require('./data/dataService');





// Define an endpoint that retrieves data from JSONPlaceholder API using the dataService
app.get('/api/posts', async (req, res) => {
  try {
    // Fetch posts data from JSONPlaceholder API
    const posts = await fetchPosts();
    // Respond with the fetched data
    res.json(posts);
    // Print a message in the console to indicate that the data has been successfully retrieved and sent as a response
    console.log('Posts data successfully retrieved and sent as a response.');
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Internal Server Error' });
    console.error('Error:', error.message);
  }
});


