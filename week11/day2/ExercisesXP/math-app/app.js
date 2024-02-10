// app.js

// Require the lodash package and the custom math module
const _ = require('lodash');
const math = require('./math');

// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations
const result1 = math.addition(5, 3);
const result2 = math.multiplication(4, 6);
const result3 = _.max([10, 20, 30]);
const result4 = _.min([5, 15, 25]);

// Print the results
console.log("Result of addition:", result1);
console.log("Result of multiplication:", result2);
console.log("Maximum value:", result3);
console.log("Minimum value:", result4);
