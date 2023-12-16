// Exercise 1: Simple If/Else Statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.

let x = 5;
let y = 2;

if (x > y) {
  console.log("x is the biggest number");
} else if (y > x) {
  console.log("y is the biggest number");
} else {
  console.log("Both numbers are equal");
}


// Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

let newDog = "Chihuahua";

// Display the number of letters in newDog
console.log(`Number of letters in newDog: ${newDog.length}`);

// Display newDog in uppercase
console.log(`Uppercase newDog: ${newDog.toUpperCase()}`);

// Display newDog in lowercase
console.log(`Lowercase newDog: ${newDog.toLowerCase()}`);

// Check if newDog is equal to "Chihuahua"
if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas, it's my favorite dog breed");
} else {
  console.log("I don't care, I prefer cats");
}



// Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.


// Prompt the user for a number
let userInput = prompt("Please enter a number:");

// Convert the user input to a number
let userNumber = parseInt(userInput);

// Check whether the number is even or odd
if (userNumber % 2 === 0) {
  console.log(`${userNumber} is an even number`);
} else {
  console.log(`${userNumber} is an odd number`);
}


// Exercise 4: Group Chat
// Instructions
// Below is an array of users that are online in a group chat.



const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// Check the number of users and display accordingly
if (users.length === 0) {
  console.log("No one is online");
} else if (users.length === 1) {
  console.log(`${users[0]} is online`);
} else if (users.length === 2) {
  console.log(`${users[0]} and ${users[1]} are online`);
} else {
  const additionalUsers = users.length - 2;
  console.log(`${users[0]}, ${users[1]} and ${additionalUsers} more are online`);
}
