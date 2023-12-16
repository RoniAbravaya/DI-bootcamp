const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array
fruits.splice(fruits.indexOf("Banana"), 1);

// Sort the array in alphabetical order
fruits.sort();

// Add “Kiwi” to the end of the array
fruits.push("Kiwi");

// Remove “Apples” from the array without using the same method as in part 1
fruits.splice(fruits.indexOf("Apples"), 1);

// Sort the array in reverse order
fruits.reverse();

console.log(fruits);


const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access and console.log "Oranges"
console.log(moreFruits[1][1][0]);
