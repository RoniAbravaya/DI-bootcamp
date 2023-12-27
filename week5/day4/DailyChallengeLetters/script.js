
// Instructions
// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions




document.getElementById('letterInput').addEventListener('input', function (e) {
    // Get the input value
    var inputValue = e.target.value;

    // Remove any non-letter characters using regular expression
    var onlyLetters = inputValue.replace(/[^a-zA-Z]/g, '');

    // Update the input value with only letters
    e.target.value = onlyLetters;
});