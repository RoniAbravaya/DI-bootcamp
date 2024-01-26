// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false



function allTruthy(...args) {
    return args.every(Boolean);
  }
  
  // Test cases
  console.log(allTruthy(true, true, true));      // Output: true
  console.log(allTruthy(true, false, true));     // Output: false
  console.log(allTruthy(5, 4, 3, 2, 1, 0));      // Output: false
  


//   Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
// output


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve data from inputs
    const nameValue = document.getElementById('name').value;
    const lastNameValue = document.getElementById('lastName').value;

    // Create an object with the retrieved data
    const formData = {
      name: nameValue,
      lastName: lastNameValue
    };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(formData);

    // Display the JSON string in the output area
    document.getElementById('output').textContent = jsonString;
  });
