// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.


// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)



function rectangularFrame(words) {
    // Find the length of the longest word
    const maxLength = Math.max(...words.map(word => word.length));

    // Display the frame
    const border = '*'.repeat(maxLength + 4);
    console.log(border);

    // Display words with stars
    words.forEach(word => {
        const spaces = ' '.repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`);
    });

    // Display the bottom border
    console.log(border);
}

// Prompt the user for words
const userInput = prompt("Enter words separated by commas:");
const wordsArray = userInput.split(',').map(word => word.trim());

// Display the rectangular frame
rectangularFrame(wordsArray);



