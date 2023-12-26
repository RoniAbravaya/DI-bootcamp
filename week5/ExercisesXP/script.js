// Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)



// Retrieve h1 and console.log it
var h1Element = document.querySelector('article h1');
console.log(h1Element.textContent);

// Remove the last paragraph in the article
var article = document.querySelector('article');
var paragraphs = article.querySelectorAll('p');
var lastParagraph = paragraphs[paragraphs.length - 1];
article.removeChild(lastParagraph);

// Event listener to change background color of h2 to red
var h2Element = document.querySelector('article h2');
h2Element.addEventListener('click', function() {
    h2Element.style.backgroundColor = 'red';
});

// Event listener to hide h3 with display:none property
var h3Element = document.querySelector('article h3');
h3Element.addEventListener('click', function() {
    h3Element.style.display = 'none';
});

// Add a button to make the text of all paragraphs bold
var button = document.createElement('button');
button.textContent = 'Make Text Bold';
button.addEventListener('click', function() {
    paragraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});
document.body.appendChild(button);

// Bonus: Hover effect on h1 to set font size to 35 pixels
h1Element.addEventListener('mouseover', function() {
    h1Element.style.fontSize = '35px';
});

// Bonus: Hover effect on 2nd paragraph to fade out with CSS animation
var secondParagraph = paragraphs[1];
secondParagraph.addEventListener('mouseover', function() {
    secondParagraph.style.transition = 'opacity 0.5s';
    secondParagraph.style.opacity = '0';
});


// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>




// Retrieve the form and console.log it
var form = document.querySelector('form');
console.log(form);

// Retrieve the inputs by their id and console.log them
var firstNameInput = document.getElementById('fname');
var lastNameInput = document.getElementById('lname');
console.log(firstNameInput, lastNameInput);

// Retrieve the inputs by their name attribute and console.log them
var inputsByName = document.getElementsByName('firstname');
console.log(inputsByName);

// Submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get values of input tags
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // Check if inputs are not empty
    if (firstName && lastName) {
        // Create li elements
        var firstNameLi = document.createElement('li');
        var lastNameLi = document.createElement('li');

        // Set text content of li elements
        firstNameLi.textContent = firstName;
        lastNameLi.textContent = lastName;

        // Append li elements to the ul with class "usersAnswer"
        var usersAnswerUl = document.querySelector('.usersAnswer');
        usersAnswerUl.appendChild(firstNameLi);
        usersAnswerUl.appendChild(lastNameLi);

    }
});


// Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example



// Declare a global variable named allBoldItems
var allBoldItems;

// Create a function called getBoldItems()
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p strong');
}

// Create a function called highlight()
function highlight() {
    for (var i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'blue';
    }
}

// Create a function called returnItemsToDefault()
function returnItemsToDefault() {
    for (var i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'black';
    }
}

// Call the function getBoldItems()
getBoldItems();

// Attach event listeners to the paragraph
var paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);




// Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

document.getElementById('MyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the radius value from the input
    var radius = parseFloat(document.getElementById('radius').value);

    // Check if the input is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume of the sphere
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the volume in the output input
        document.getElementById('volume').value = volume.toFixed(2);
    } else {
        alert('Please enter a valid number for the radius.');
    }
});






