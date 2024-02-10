// read-directory.js

const fs = require('fs');

// Read list of files in a specified directory and display their names
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Files in the directory:');
  files.forEach(file => console.log(file));
});
