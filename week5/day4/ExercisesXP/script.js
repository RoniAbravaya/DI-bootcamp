// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.


  // Part I
  setTimeout(function () {
    alert("Hello World");
}, 2000);

// Part II
setTimeout(function () {
    var container = document.getElementById('container');
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);
}, 2000);

// Part III
var intervalId = setInterval(function () {
    var container = document.getElementById('container');
    var paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);

    // Clear the interval when there are 5 paragraphs
    if (container.childElementCount === 5) {
        clearInterval(intervalId);
    }
}, 2000);

// Button click to clear the interval
document.getElementById('clear').addEventListener('click', function () {
    clearInterval(intervalId);
});



// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions









function myMove() {
    var container = document.getElementById('container');
    var animate = document.getElementById('animate');
    var position = 0;

    // Move the div to the right every millisecond
    var intervalId = setInterval(function () {
        position++;
        animate.style.left = position + 'px';

        // Check if the div reaches the end of the container
        if (position >= container.offsetWidth - animate.offsetWidth) {
            clearInterval(intervalId);
        }
    }, 1);
}



// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.





var isDragging = false;

var box = document.getElementById('box');
var target = document.getElementById('target');

box.addEventListener('mousedown', function (e) {
    isDragging = true;
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        // Update the position of the box while dragging
        box.style.left = e.clientX - box.offsetWidth / 2 + 'px';
        box.style.top = e.clientY - box.offsetHeight / 2 + 'px';
    }
});

document.addEventListener('mouseup', function (e) {
    if (isDragging) {
        isDragging = false;

        // Check if the box is dropped into the target
        var boxRect = box.getBoundingClientRect();
        var targetRect = target.getBoundingClientRect();

        if (
            boxRect.left >= targetRect.left &&
            boxRect.right <= targetRect.right &&
            boxRect.top >= targetRect.top &&
            boxRect.bottom <= targetRect.bottom
        ) {
            // Box is inside the target
            alert('Box dropped into the target!');
        }
    }
});


