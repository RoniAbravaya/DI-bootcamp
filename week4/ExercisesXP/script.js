// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


    // Retrieve the div and console.log it
    const containerDiv = document.getElementById('container');
    console.log(containerDiv);

    // Change the name “Pete” to “Richard”
    const peteElement = document.querySelector('ul.list li:nth-child(2)');
    peteElement.textContent = 'Richard';

    // Delete the <li> that contains the text node “Sarah”
    const sarahElement = document.querySelector('ul.list:nth-child(2) li:nth-child(2)');
    sarahElement.remove();

    // Change each first name of the two <ul>'s to your name using a loop
    const ulElements = document.querySelectorAll('ul.list');
    ulElements.forEach(ul => {
        const firstNameElement = ul.querySelector('li');
        firstNameElement.textContent = 'Your Name';
    });

    // Bonus - Add classes to both <ul>'s
    ulElements.forEach(ul => {
        ul.classList.add('student_list');
    });

    // Add classes to the first <ul>
    const firstUl = document.querySelector('ul.list:first-child');
    firstUl.classList.add('university', 'attendance');



//     <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).



 // Add a “light blue” background color and some padding to the <div>
 const usersDiv = document.getElementById('usersDiv');
 usersDiv.style.backgroundColor = 'lightblue';
 usersDiv.style.padding = '10px';

 // Do not display the <li> that contains the text node “John”
 const johnElement = document.querySelector('#userList li:first-child');
 johnElement.style.display = 'none';

 // Add a border to the <li> that contains the text node “Pete”
 const peteElement = document.querySelector('#userList li:last-child');
 peteElement.style.border = '2px solid black';

 // Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
 if (usersDiv.style.backgroundColor.toLowerCase() === 'lightblue') {
     const userList = document.querySelectorAll('#userList li');
     const userNameX = userList[0].textContent;
     const userNameY = userList[1].textContent;
     alert(`Hello ${userNameX} and ${userNameY}`);
 }


//  Exercise 3 : Change The Navbar
//  Instructions
//  <div id="navBar">
//      <ul>
//          <li><a href="#">Profile</a></li>
//          <li><a href="#">Home</a></li>
//          <li><a href="#">My Friends</a></li>
//          <li><a href="#">Messenger</a></li>
//          <li><a href="#">My Pics</a></li>
//      </ul>
//  </div>
 
 
//  Add the code above, to your HTML file
 
//  Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
 
//  We are going to add a new <li> to the <ul>.
//  First, create a new <li> tag (use the createElement method).
//  Create a new text node with “Logout” as its specified text.
//  Append the text node to the newly created list node (<li>).
//  Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
 
//  Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


   // Using JavaScript, change the value of the id attribute from navBar to socialNetworkNavigation
   const navBar = document.getElementById('navBar');
   navBar.setAttribute('id', 'socialNetworkNavigation');

   // Create a new <li> element
   const newListItem = document.createElement('li');

   // Create a new text node with “Logout” as its specified text
   const textNode = document.createTextNode('Logout');

   // Append the text node to the newly created list node (<li>)
   newListItem.appendChild(textNode);

   // Append this updated list node to the unordered list (<ul>) using the appendChild method
   const ulElement = navBar.firstElementChild;
   ulElement.appendChild(newListItem);

   // Retrieve the first and last <li> elements from their parent element (<ul>)
   const firstLi = ulElement.firstElementChild;
   const lastLi = ulElement.lastElementChild;

   // Display the text of each link
   console.log('First Link:', firstLi.textContent);
   console.log('Last Link:', lastLi.textContent);

//    Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

// yourScript.js
document.addEventListener('DOMContentLoaded', function () {
    // Create an empty div
    const listBooksDiv = document.querySelector('.listBooks');

    // Create an array of books
    const allBooks = [
        {
            title: 'Harry Potter',
            author: 'JK Rowling',
            image: 'https://example.com/harry_potter.jpg',
            alreadyRead: true
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'https://example.com/great_gatsby.jpg',
            alreadyRead: false
        }
    ];

    // Using the DOM, render the books inside an HTML table
    const table = document.createElement('table');

    // Create table header
    const headerRow = table.insertRow();
    const titleHeader = headerRow.insertCell(0);
    const authorHeader = headerRow.insertCell(1);
    const imageHeader = headerRow.insertCell(2);

    titleHeader.textContent = 'Title';
    authorHeader.textContent = 'Author';
    imageHeader.textContent = 'Image';

    // Populate the table with books
    allBooks.forEach(book => {
        const row = table.insertRow();
        const titleCell = row.insertCell(0);
        const authorCell = row.insertCell(1);
        const imageCell = row.insertCell(2);

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;

        // Apply styles if the book is already read
        if (book.alreadyRead) {
            titleCell.style.color = 'red';
            authorCell.style.color = 'red';
        }

        // Set the width of the image
        const image = document.createElement('img');
        image.src = book.image;
        image.width = 100;
        imageCell.appendChild(image);
    });

    // Append the table to the div
    listBooksDiv.appendChild(table);
});


