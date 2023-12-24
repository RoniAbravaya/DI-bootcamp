// Daily Challenge: Planets
// Last Updated: September 22nd, 2023

// What You Will Learn :
// DOM tree


// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Challenge: Create a solar system</title>
//         <style>
//             body {
//                 background-color: black;
//                 padding: 10px;
//             }
//             .planet {
//                 width: 100px;
//                 height: 100px;
//                 border-radius: 50%;
//                 text-align: center;
//                 padding: 10px;
//                 position: relative;
//                 border: 2px solid white;
//             }
//             .moon {
//                 position: absolute;
//                 width: 30px;
//                 height: 30px;
//                 border-radius: 50%;
//                 background: rgb(237, 237, 237);
//                 border: 5px solid red;
//             }
//         </style>
//     </head>
//     <body>

//     <section class="listPlanets"></section>

//     <script src="..."></script>
//     </body>
// </html>




document.addEventListener('DOMContentLoaded', function () {
    const planetsArray = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    // Function to create a planet div
    function createPlanet(name, color) {
        const planetDiv = document.createElement('div');
        planetDiv.classList.add('planet', name.toLowerCase());
        planetDiv.style.backgroundColor = color;
        planetDiv.textContent = name;

        // Function to create a moon div
        function createMoon() {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');
            return moonDiv;
        }

        // Add moons based on the planet's name (for demonstration purposes)
        const numberOfMoons = planetsArray.indexOf(name) + 1; // Each planet has a different number of moons
        for (let i = 0; i < numberOfMoons; i++) {
            const moon = createMoon();
            planetDiv.appendChild(moon);
        }

        return planetDiv;
    }

    const listPlanets = document.querySelector('.listPlanets');

    // Create planets and append them to the section
    planetsArray.forEach((planet, index) => {
        const color = getRandomColor();
        const planetDiv = createPlanet(planet, color);
        listPlanets.appendChild(planetDiv);
    });

    // Function to get a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

