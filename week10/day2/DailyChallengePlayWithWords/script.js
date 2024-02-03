// Function to make all words in an array uppercase
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
        const uppercasedWords = words.map(word => word.toUpperCase());
        resolve(uppercasedWords);
      } else {
        reject("Invalid input: All elements in the array must be strings.");
      }
    });
  }
  
  // Function to sort words if the array length is greater than 4
  function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(uppercasedWords) && uppercasedWords.length > 4) {
        const sortedWords = uppercasedWords.sort();
        resolve(sortedWords);
      } else {
        reject("Invalid input: Array length must be greater than 4.");
      }
    });
  }
  
  // Example usage:
  const wordsArray = ["apple", "banana", "cherry", "date"];
  makeAllCaps(wordsArray)
    .then(uppercasedWords => sortWords(uppercasedWords))
    .then(sortedWords => console.log("Sorted Words:", sortedWords))
    .catch(error => console.error("Error:", error));

    
    // Example 1: Invalid input (contains a non-string element)
makeAllCaps([1, "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error));

// Example 2: Invalid input (contains a non-string element)
makeAllCaps(["apple", "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error));

// Example 3: Valid input (all strings), output should be uppercased and sorted array
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
.catch(error => console.log(error));


const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  // Function to convert morse JSON string to morse JavaScript object
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
          reject("Error: Morse object is empty.");
        } else {
          resolve(morseObject);
        }
      } catch (error) {
        reject("Error parsing Morse JSON string.");
      }
    });
  }
  
  // Function to translate a word or sentence to Morse code
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:");
      const morseTranslation = [];
  
      for (const char of userInput.toLowerCase()) {
        if (char in morseJS) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Error: Character '${char}' not found in Morse object.`);
        }
      }
  
      resolve(morseTranslation);
    });
  }
  
  // Function to join and display Morse code translation on the DOM
  function joinWords(morseTranslation) {
    const morseDisplay = morseTranslation.join('<br>');
    document.body.innerHTML = `<div>${morseDisplay}</div>`;
  }
  
  // Example usage: Chaining the three functions
  toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.error(error));
  