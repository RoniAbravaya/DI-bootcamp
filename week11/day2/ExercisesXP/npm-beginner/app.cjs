// app.js
require = require("esm")(module/*, options*/)
module.exports = require("./app.cjs")


const chalk = require('chalk');

// Exporting the chalk module
module.exports = chalk;
// Require the chalk package


// Use chalk to color and style text
console.log(chalk.blue.bold('Hello, world!')); // Output in bold blue
console.log(chalk.red.underline('This is underlined text.')); // Output in underlined red
console.log(chalk.green.inverse('This text has a green background.')); // Output with green background
console.log(chalk.yellow('You can combine different styles and colors.')); // Output in yellow
