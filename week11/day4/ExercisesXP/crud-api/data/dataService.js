// Import the axios module
const axios = require('axios');

// Function to fetch data for all posts from JSONPlaceholder API
async function fetchPosts() {
  try {
    // Make a GET request to fetch data from JSONPlaceholder API
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
}

// Export the fetchPosts function
module.exports = { fetchPosts };
