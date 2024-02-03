const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const gifForm = document.getElementById("gifForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

// Function to fetch a random gif based on user input
async function fetchRandomGif(searchTerm) {
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;
  
  try {
    const response = await fetch(apiUrl);

    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const gifUrl = data.data.images.original.url;
    appendGif(gifUrl, searchTerm);
  } catch (error) {
    console.error("Error fetching gif:", error.message);
  }
}

// Function to append a gif to the page with a delete button
function appendGif(gifUrl, category) {
  const gifElement = document.createElement("div");
  gifElement.innerHTML = `
    <img src="${gifUrl}" alt="${category} Gif">
    <button class="deleteBtn" onclick="deleteGif(this)">DELETE</button>
  `;
  gifContainer.appendChild(gifElement);
}

// Function to delete a specific gif
function deleteGif(deleteBtn) {
  const gifElement = deleteBtn.parentElement;
  gifContainer.removeChild(gifElement);
}

// Event listener for the form submission
gifForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchRandomGif(searchTerm);
  }
  searchInput.value = "";
});

// Event listener for the "Delete All" button
deleteAllBtn.addEventListener("click", function () {
  gifContainer.innerHTML = ""; // Remove all gif elements
});
