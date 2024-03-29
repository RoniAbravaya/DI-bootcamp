// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ------2------
// const country = "USA";
// console.log([...country]);

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);



const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);


// Explanation: The spread (...) operator is used to expand the elements of the vegetables and fruits arrays into the result array. The resulting array contains "bread", the elements of vegetables, "chicken", and the elements of fruits.

const country = "USA";
console.log([...country]);


// Explanation: The spread operator is used to create an array of characters from the string "USA". Each character becomes a separate element in the resulting array.


let newArray = [...[,,]];
console.log(newArray);

// Explanation: The spread operator is used to create a new array with the elements of the inner array [,,]. Since the inner array has two empty slots (undefined), the resulting array will have two undefined elements.


// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.


// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.



const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
  ];
  
  // 1. Using the map() method to create welcome messages
  const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
  
  console.log(welcomeStudents);
  
  // 2. Using the filter() method to get Full Stack Residents
  const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
  
  console.log(fullStackResidents);
  
  // 3. Bonus: Chain filter() with map() to get last names of Full Stack Residents
  const fullStackResidentsLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
  
  console.log(fullStackResidentsLastNames);
  


//   🌟 Exercise 3 : Star Wars
//   Instructions
//   Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
  
//   Use the reduce() method to combine all of these into a single string.


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Using reduce() to combine all elements into a single string
const combinedString = epic.reduce((accumulator, currentElement) => accumulator + ' ' + currentElement);

console.log(combinedString.trim()); // Output: "a long time ago in a galaxy far far away"





// 🌟 Exercise 4 : Employees #2
// Instructions
// Using this object:

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)


const students = [
    {name: "Ray", course: "Computer Science", isPassed: true},
    {name: "Liam", course: "Computer Science", isPassed: false},
    {name: "Jenner", course: "Information Technology", isPassed: true},
    {name: "Marco", course: "Robotics", isPassed: true},
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
    {name: "Jamie", course: "Big Data", isPassed: false}
  ];
  
  // Using filter() to get students who passed the course
  const passedStudents = students.filter(student => student.isPassed);
  
  // Bonus: Chaining filter() with forEach() to congratulate passing students
  passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
  







