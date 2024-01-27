// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.



function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

    // Sort the characters in the strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
}

// Example usage:
const result1 = areAnagrams("Astronomer", "Moon starer");
const result2 = areAnagrams("School master", "The classroom");
const result3 = areAnagrams("The Morse Code", "Here come dots");

console.log(result1); // Output: true
console.log(result2); // Output: true
console.log(result3); // Output: true
