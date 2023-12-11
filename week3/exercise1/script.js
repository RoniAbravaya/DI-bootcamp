// Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

let favovriteFood = "burge"
let favoriteMeal = "breakfast"
console.log("I eat " + favovriteFood + " " +  "every " + favoriteMeal )

// done

// Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory



const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length

let myWatchedSeriesSentence = myWatchedSeries [0 , 1 , 2]

console.log(" I watched" + " " + myWatchedSeriesLength  + " " + "series" + " " + myWatchedSeries )

// done

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries.splice(2,1,"friends")
myWatchedSeries.push (" The Last of Us")
myWatchedSeries.splice(0,0,"Breaking bad")
myWatchedSeries.splice(1,1)
console.log("The third letter of 'money heist' is: " + myWatchedSeries[1][2]);


console.log (myWatchedSeries)


// done

// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32



const celsiusTemperature = 25;


const fahrenheitTemperature = (celsiusTemperature / 5) * 9 + 32;


console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");


// done

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

// done

// What is the value of c? = undifined

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');
// outcome will be 75 ( 5 is string)

// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


typeof(15)
// Prediction: It will output "number" because 15 is a number.
// Actual: "number"

typeof(5.5)
// Prediction: It will output "number" because 5.5 is a number.
// Actual: "number"

typeof(NaN)
// Prediction: It will output "number" because NaN is considered a numeric data type in JavaScript.
// Actual: "number"

typeof("hello")
// Prediction: It will output "string" because "hello" is a string.
// Actual: "string"

typeof(true)
// Prediction: It will output "boolean" because true is a boolean value.
// Actual: "boolean"

typeof(1 != 2)
// Prediction: It will output "boolean" because the result of the expression 1 != 2 is true, and true is a boolean value.
// Actual: "boolean"

"hamburger" + "s"
// Prediction: It will output "hamburgers" because the + operator concatenates strings.
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: It will result in NaN because the - operator is not defined for strings.
// Actual: NaN

"1" + "3"
// Prediction: It will output "13" because the + operator concatenates strings.
// Actual: "13"

"1" - "3"
// Prediction: It will result in -2 because the - operator performs numeric subtraction after converting the strings to numbers.
// Actual: -2

"johnny" + 5
// Prediction: It will output "johnny5" because the + operator concatenates strings.
// Actual: "johnny5"

"johnny" - 5
// Prediction: It will result in NaN because the - operator is not defined for strings.
// Actual: NaN

99 * "hello"
// Prediction: It will result in NaN because the * operator is not defined for a number multiplied by a string.
// Actual: NaN

1 != 1
// Prediction: It will output "false" because 1 is equal to 1, and != checks for inequality.
// Actual: false

1 == "1"
// Prediction: It will output "true" because == performs type coercion, converting the string "1" to a number before comparison.
// Actual: true

1 === "1"
// Prediction: It will output "false" because === checks for both value and type equality, and 1 (number) is not the same as "1" (string).
// Actual: false

// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



5 + "34"
// Prediction: It will concatenate the string "34" to the number 5, resulting in "534".
// Actual: "534"

5 - "4"
// Prediction: It will perform numeric subtraction after converting the string "4" to a number, resulting in 1.
// Actual: 1

10 % 5
// Prediction: It will output 0 because 10 is evenly divisible by 5.
// Actual: 0

5 % 10
// Prediction: It will output 5 because 5 is not evenly divisible by 10, and the remainder is 5.
// Actual: 5

"Java" + "Script"
// Prediction: It will concatenate the two strings, resulting in "JavaScript".
// Actual: "JavaScript"

" " + " "
// Prediction: It will concatenate the two empty strings, resulting in a single space.
// Actual: " "

" " + 0
// Prediction: It will concatenate the string "0" to the space, resulting in " 0".
// Actual: " 0"

true + true
// Prediction: It will convert true to 1 and perform numeric addition, resulting in 2.
// Actual: 2

true + false
// Prediction: It will convert true to 1 and false to 0, then perform numeric addition, resulting in 1.
// Actual: 1

false + true
// Prediction: It will convert false to 0 and true to 1, then perform numeric addition, resulting in 1.
// Actual: 1

false - true
// Prediction: It will convert false to 0 and true to 1, then perform numeric subtraction, resulting in -1.
// Actual: -1

!true
// Prediction: It will output false because ! is the logical NOT operator, and it negates true.
// Actual: false

3 - 4
// Prediction: It will perform numeric subtraction, resulting in -1.
// Actual: -1

"Bob" - "bill"
// Prediction: It will result in NaN because the - operator is not defined for strings.
// Actual: NaN







