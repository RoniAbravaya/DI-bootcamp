// Daily Challenge: Groceries
// Last Updated: September 22nd, 2023

// What You Will Learn :
// Objects
// Reference and Value


// Instructions
// Using this object :

// let client = "John";

// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         paid : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.


let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// Arrow function to display fruits using forEach
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}

// Arrow function to clone groceries and make modifications
const cloneGroceries = () => {
    // Copy the client variable
    let user = client;

    // Change the client variable to "Betty"
    client = "Betty";

    // Create a shallow copy of the groceries object
    let shopping = { ...groceries };

    // Change the value of the totalPrice key to "35$"
    shopping.totalPrice = "35$";

    // Change the value of the paid key to false
    shopping.other.paid = false;

    // Display the modified values
    console.log("Modified client:", client);
    console.log("User variable:", user);
    console.log("Modified shopping object:", shopping);
}

// Invoke displayGroceries function
displayGroceries();

// Invoke cloneGroceries function
cloneGroceries();


