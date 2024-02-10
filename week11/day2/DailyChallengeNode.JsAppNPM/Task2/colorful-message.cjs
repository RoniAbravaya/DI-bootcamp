// colorful-message.js

// Require the chalk package
const chalk = require('chalk');

// Function to create and display a colorful message in the terminal
function displayColorfulMessage() {
  console.log(chalk.blue.bold('Hello, world!')); // Output in bold blue
  console.log(chalk.red.underline('This is underlined text.')); // Output in underlined red
  console.log(chalk.green.inverse('This text has a green background.')); // Output with green background
  console.log(chalk.yellow('You can combine different styles and colors.')); // Output in yellow
}

// Export the function
module.exports = displayColorfulMessage;
