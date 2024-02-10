// app.js

// Importing functions from fileManager.js
const { readFile, writeFile } = require('./fileManager.cjs');

// Reading the content of "Hello World.txt" file
readFile('Hello World.txt')
  .then(data => {
    console.log('Content of "Hello World.txt":', data);
    // Writing to "Bye World.txt" file
    return writeFile('Bye World.txt', 'Writing to the file');
  })
  .then(message => {
    console.log(message);
    console.log('Content has been written to "Bye World.txt".');
  })
  .catch(error => console.error('Error:', error));
