// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.


const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Function to fetch data from the Giphy API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Giphy API Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Call the function to fetch data
fetchData();



// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.



const apiUrl2 = "https://api.giphy.com/v1/gifs/search?q=sun&rating=10g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Function to fetch data from the Giphy API
async function fetchData2() {
  try {
    const response = await fetch(apiUrl2);

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Giphy API Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Call the function to fetch data
fetchData2();

// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.




async function fetchData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
  
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  // Call the async function to fetch data
  fetchData();

  


//   🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// The asyncCall function demonstrates how to call an asynchronous function (resolveAfter2Seconds) using the await keyword. Here's a brief breakdown of the code:

// resolveAfter2Seconds: This function returns a Promise that resolves after a 2-second timeout.

// asyncCall: This asynchronous function logs "calling", then awaits the resolution of resolveAfter2Seconds using await. Once the promise is resolved, it logs the result.

// When you run asyncCall(), it will output "calling", then after a 2-second delay, it will log "resolved". This showcases how async/await simplifies asynchronous code and makes it look more like synchronous code.

// Your code is correct, and it effectively demonstrates the concept of asynchronous programming with Promises and async/await.


