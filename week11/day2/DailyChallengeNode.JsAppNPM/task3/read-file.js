// read-file.js

// Require the fs module
const fs = require('fs');

// Read the content from the file-data.txt file
fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Display the content in the terminal
  console.log('File content:');
  console.log(data);
});
