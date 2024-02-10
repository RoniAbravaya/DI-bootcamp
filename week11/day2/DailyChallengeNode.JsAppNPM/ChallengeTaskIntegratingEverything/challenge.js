// challenge.js

// Require the modules from the previous tasks
const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const fs = require('fs');

// Use the greet function to greet the user
console.log(greet('John'));

// Display the colorful message
displayColorfulMessage();

// Read and display the file's content
fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:');
  console.log(data);
});
