document.addEventListener("DOMContentLoaded", function () {
    createGrid();

    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    const clearButton = document.querySelector("#sidebar button");
    let selectedColor = "";

    main.addEventListener("mouseover", function (event) {
        if (selectedColor && event.target.style.backgroundColor === "") {
            // If an empty box in the main area is hovered
            event.target.style.backgroundColor = selectedColor;
        }
    });

    clearButton.addEventListener("click", function () {
        // Clear all colors in the main area
        clearGrid();
    });

    // Move the sidebar event listener inside the DOMContentLoaded event handler
    sidebar.addEventListener("click", function (event) {
        const computedColor = window.getComputedStyle(event.target).getPropertyValue('background-color');
        if (computedColor !== 'rgba(0, 0, 0, 0)' && computedColor !== 'transparent') {
            // If a color box in the sidebar is clicked
            selectedColor = computedColor;
        }
    });
});

function createGrid() {
    const main = document.getElementById("main");

    for (let i = 0; i < 1020; i++) {
        const div = document.createElement("div");
        div.addEventListener("mouseover", changeColor);
        main.appendChild(div);
    }
}

function changeColor(event) {
    const color = event.target.style.backgroundColor;
    const newColor = color === "white" ? "black" : "white";
    event.target.style.backgroundColor = selectedColor;
}

function clearGrid() {
    const grid = document.getElementById("main");
    const divs = grid.querySelectorAll("div");

    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
}
