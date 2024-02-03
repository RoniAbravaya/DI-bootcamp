// Constants for DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const characterInfoDiv = document.getElementById('character-info');
const loadingDiv = document.querySelector('.loading');
const characterDetailsDiv = document.querySelector('.character-details');
const nameElement = document.getElementById('name');
const heightElement = document.getElementById('height');
const genderElement = document.getElementById('gender');
const birthYearElement = document.getElementById('birth-year');
const homeworldElement = document.getElementById('homeworld');

// Event listener for the search button
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchData(searchTerm);
  } else {
    alert('Please enter a character name.');
  }
});

// Function to fetch data from the API using fetch method
async function fetchData(searchTerm) {
  try {
    loadingDiv.style.display = 'block';

    const response = await fetch(`https://www.swapi.tech/api/people/?name=${searchTerm}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    if (data.result && data.result.length > 0) {
      const character = data.result[0].properties;

      nameElement.textContent = character.name;
      heightElement.textContent = character.height;
      genderElement.textContent = character.gender;
      birthYearElement.textContent = character.birth_year;

      // Fetch homeworld data
      const homeworldResponse = await fetch(character.homeworld);

      if (homeworldResponse.ok) {
        const homeworldData = await homeworldResponse.json();
        homeworldElement.textContent = homeworldData.result.properties.name;
      } else {
        throw new Error(`Error fetching homeworld: ${homeworldResponse.status} - ${homeworldResponse.statusText}`);
      }

      loadingDiv.style.display = 'none';
      characterDetailsDiv.style.display = 'block';
    } else {
      throw new Error('No results found for the specified search term. Please try a different search term.');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
    loadingDiv.innerHTML = `<p>${error.message}</p>`;
  }
}


// Additional functions and event handlers can be added as needed

// Sample: Event listener for a reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  searchInput.value = '';
  characterDetailsDiv.style.display = 'none';
});