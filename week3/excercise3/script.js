// Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.


const people = ["Greg", "Mary", "Devon", "James"];

// Remove “Greg” from the people array
people.shift();

// Replace “James” with “Jason”
people[2] = "Jason";

// Add "Roni" to the end of the people array
people.push("Roni");

// Console.log Mary’s index
console.log(people.indexOf("Mary"));

// Make a copy of the people array without “Mary” or "Roni"
const peopleCopy = people.slice(1, 3);

// Give the index of “Foo” (returns -1 because "Foo" is not in the array)
console.log(people.indexOf("Foo"));

// Create a variable called last which value is the last element of the array
const last = people[people.length - 1];

// Iterate through the people array and console.log each person
for (let person of people) {
  console.log(person);
}

// Iterate through the people array and exit after console.log "Devon"
for (let person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}


// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


const colors = ["blue", "red", "green", "yellow", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  // Determine the correct suffix for the current iteration
  let suffix = (i < 3) ? suffixes[i] : suffixes[3];

  // Log the statement with the appropriate suffix
  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let userNumber;

do {
  // Prompt the user for a number
  userNumber = prompt("Please enter a number:");

  // Check if the user clicked cancel or entered an empty string
  if (userNumber === null || userNumber.trim() === "") {
    console.log("Invalid input. Please enter a valid number.");
    continue; // Skip the rest of the loop and ask for input again
  }

  // Convert the user input to a number
  userNumber = parseFloat(userNumber);

  // Check if the number is smaller than 10
  if (userNumber < 10) {
    console.log("Number is smaller than 10. Please enter a new number.");
  }

} while (userNumber < 10);




// Exercise 4 : Building Management
// Instructions:
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.



const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  // Console.log the number of floors in the building
  console.log(`Number of floors in the building: ${building.numberOfFloors}`);
  
  // Console.log how many apartments are on the floors 1 and 3
  console.log(`Number of apartments on the first floor: ${building.numberOfAptByFloor.firstFloor}`);
  console.log(`Number of apartments on the third floor: ${building.numberOfAptByFloor.thirdFloor}`);
  
  // Console.log the name of the second tenant and the number of rooms he has in his apartment
  const secondTenant = building.nameOfTenants[1];
  
  // Check if the second tenant exists in the numberOfRoomsAndRent object
  if (building.numberOfRoomsAndRent.hasOwnProperty(secondTenant)) {
    const roomsAndRent = building.numberOfRoomsAndRent[secondTenant];
    console.log(`${secondTenant} has ${roomsAndRent[0]} rooms in his apartment.`);
  } else {
    console.log(`${secondTenant} does not have information available.`);
  }
  
  // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent
  const sarahRent = building.numberOfRoomsAndRent.sarah[1];
  const davidRent = building.numberOfRoomsAndRent.david[1];
  const danRent = building.numberOfRoomsAndRent.dan[1];
  
  if (sarahRent + davidRent > danRent) {
    // Increase Dan’s rent to 1200
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(`Dan's rent has been increased to 1200.`);
  }
  
  // Logging the updated building object
  console.log(building);
  
  


// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    father: "John",
    mother: "Mary",
    son: "Tom",
    daughter: "Emily",
  };
  
  // Using a for-in loop to console.log the keys of the object
  console.log("Keys of the family object:");
  for (let key in family) {
    console.log(key);
  }
  
  // Using a for-in loop to console.log the values of the object
  console.log("\nValues of the family object:");
  for (let key in family) {
    console.log(family[key]);
  }
  


//   Exercise 6 : Rudolf
// Instructions Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let result = '';
  
  for (let key in details) {
    result += details[key] + ' ';
  }
  
  console.log(result.trim());
  


//   Exercise 7 : Secret Group
// Instructions
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”


const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Extract the first letter of each name, sort them, and concatenate
const secretSocietyName = names.map(name => name[0]).sort().join('');

// Log the name of the secret society
console.log(secretSocietyName);




