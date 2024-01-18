// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const addNumbers = (num1, num2) => num1 + num2;


// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.


// Function Declaration
function convertToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
  }
  
  // Invoking Function Declaration
  console.log(convertToGramsDeclaration(2)); // Output: 2000
  
  // Function Expression
  const convertToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
  };
  
  // Invoking Function Expression
  console.log(convertToGramsExpression(2)); // Output: 2000
  
  // Difference between Function Declaration and Function Expression:
  // Function declarations are hoisted, meaning they are available in the whole scope, while function expressions are not.
  
  // One-line Arrow Function
  const convertToGramsArrow = (weightInKg) => weightInKg * 1000;
  
  // Invoking One-line Arrow Function
  console.log(convertToGramsArrow(2)); // Output: 2000
  
  
//   🌟 Exercise 3 : Fortune Teller
//   Instructions
//   Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//   The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
  


(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    // Assuming you have an HTML element with id="output" to display the result
    const outputElement = document.getElementById('output');

    // Check if the element exists before updating its text content
    if (outputElement) {
      // Create the sentence
      const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

      // Display the sentence in the DOM
      outputElement.textContent = sentence;
    } else {
      console.error('Element with id "output" not found.');
    }
  })(3, 'Alice', 'New York', 'Software Developer');


//   🌟 Exercise 4 : Welcome
//   Instructions
//   John has just signed in to your website and you want to welcome him.
  
//   Create a Bootstrap Navbar in your HTML file.
//   In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//   The function should add a div in the nabvar, displaying the name of the user and his profile picture.



// Self-invoking function to add user welcome div to the Navbar
(function(userName) {
    // Create a div element for the user welcome
    const userWelcomeDiv = document.createElement('div');
    userWelcomeDiv.className = 'navbar-text';
  
    // Add user name and profile picture (you can replace 'profile.jpg' with the actual path)
    userWelcomeDiv.innerHTML = `
      <span class="me-2">Welcome, ${userName}!</span>
      <img src="profile.jpg" alt="Profile Picture" class="rounded-circle" width="30" height="30">
    `;
  
    // Append the user welcome div to the Navbar
    const navbarNav = document.querySelector('.navbar-nav');
    navbarNav.appendChild(userWelcomeDiv);
  })('John');

  

//   🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


// Part I
function makeJuice(size) {
    // Inner function: addIngredients
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      // Display the sentence on the DOM
      document.getElementById('output2').innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
  
    // Invoke addIngredients function ONCE inside makeJuice
    addIngredients('Apple', 'Orange', 'Carrot');
  }
  
  // Invoke the outer function in the global scope
  makeJuice('medium');
  
  // Part II
  function makeJuiceWithIngredients(size) {
    // Create an empty array named ingredients
    const ingredients = [];
  
    // Inner function: addIngredients
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      // Push ingredients into the array
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    // Invoke addIngredients function TWICE
    addIngredients('Apple', 'Orange', 'Carrot');
    addIngredients('Spinach', 'Cucumber', 'Ginger');
  
    // Inner function: displayJuice
    function displayJuice() {
      // Display the sentence on the DOM
      document.getElementById('output2').innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
    }
  
    // Invoke displayJuice function ONCE
    displayJuice();
  }
  
  // Invoke the makeJuiceWithIngredients function in the global scope
  makeJuiceWithIngredients('large');
  








