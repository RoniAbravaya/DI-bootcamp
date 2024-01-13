// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne(); // Prediction: The alert will display "inside the funcOne function 3".

// #1.2 What will happen if the variable is declared with const instead of let ?
// Prediction: It will throw an error because you cannot reassign a value to a constant.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // Prediction: The alert will display "inside the funcThree function 0".
funcTwo();
funcThree(); // Prediction: The alert will display "inside the funcThree function 5".

// #2.2 What will happen if the variable is declared with const instead of let ?
// Prediction: It will throw an error because you cannot reassign a value to a constant.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive(); // Prediction: The alert will display "inside the funcFive function hello".

//#4
let aA = 1;
function funcSix() {
    let aA = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // Prediction: The alert will display "inside the funcSix function test".

// #4.2 What will happen if the variable is declared with const instead of let ?
// Prediction: It will not throw an error, but it will declare a new variable `a` inside funcSix, not affecting the outer scope.

//#5
let aAA = 2;
if (true) {
    let aAA = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// Prediction: The first alert will display "in the if block 5", and the second alert will display "outside of the if block 2".

// #5.2 What will happen if the variable is declared with const instead of let ?
// Prediction: It will throw an error inside the if block because constants are block-scoped and cannot be redeclared.



// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.





const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (value) => typeof value === 'string';

// Example usage:
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// Instructions
// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


const colorsA = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display colors in order
colorsA.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" is present
if (colorsA.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}


// Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.



const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];


colors.forEach((color, index) => {
    const suffix = (index + 1) % 100 > 10 && (index + 1) % 100 < 14 ? ordinal[0] : ordinal[(index + 1) % 10] || ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});

// Check if "Violet" is present
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.


// Create a global variable for the bank amount
let bankAmount = 5000; // Assuming an initial amount, you can adjust this accordingly

// Create a constant for the VAT percentage
const vatPercentage = 17;

// Create an array with monthly expenses
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

// Function to calculate VAT on an expense
const calculateVAT = (amount) => {
    const vatAmount = (amount * vatPercentage) / 100;
    return amount > 0 ? amount + vatAmount : amount - vatAmount;
};

// Modify expenses to include taxes
const modifiedExpenses = expenses.map((expense) => calculateVAT(parseFloat(expense)));

// Update bank amount based on modified expenses
modifiedExpenses.forEach((expense) => {
    bankAmount += expense;
});

// Display the current bank account standing at the end of the month
console.log(`Your bank account standing at the end of the month: ${bankAmount.toFixed(2)}`);






