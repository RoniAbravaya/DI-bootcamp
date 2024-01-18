// Daily Challenge : True Or False
// Last Updated: September 22nd, 2023

// What You Will Learn :
// Array methods
// Conditionals


// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false


function allTruthy(...args) {
    // Check if all parameters are truthy
    return args.every(value => Boolean(value));
}

// Examples
console.log(allTruthy(true, true, true));     // ➞ true
console.log(allTruthy(true, false, true));    // ➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0));     // ➞ false
