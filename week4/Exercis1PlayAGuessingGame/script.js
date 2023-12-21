function playTheGame() {
    const wantToPlay = confirm("Do you want to play the game?");

    if (!wantToPlay) {
        alert("No problem, Goodbye");
    } else {
        let validNumberEntered = false;

        while (!validNumberEntered) {
            const userNumber = prompt("Enter a number between 0 and 10:");

            if (!isNaN(userNumber)) {
                const userGuess = Math.round(Number(userNumber));

                if (userGuess >= 0 && userGuess <= 10) {
                    validNumberEntered = true;
                    const computerNumber = Math.round(Math.random() * 10);
                    compareNumbers(userGuess, computerNumber, 0); // Pass the counter as 0 initially
                } else {
                    alert("Sorry, it's not a good number. Please enter a number between 0 and 10.");
                }
            } else {
                alert("Sorry, Not a number. Please enter a valid number.");
            }
        }
    }
}

function compareNumbers(userNumber, computerNumber, counter) {
    if (userNumber === computerNumber) {
        alert("WINNER");
    } else if (userNumber > computerNumber) {
        const newGuess = prompt("Your number is bigger than the computer’s, guess again:");
        compareNumbers(newGuess, computerNumber, counter + 1);
    } else if (userNumber < computerNumber) {
        const newGuess = prompt("Your number is smaller than the computer’s, guess again:");
        compareNumbers(newGuess, computerNumber, counter + 1);
    }

    if (counter >= 3) {
        alert("Out of chances");
    }
}

// Example usage:
// playTheGame();

