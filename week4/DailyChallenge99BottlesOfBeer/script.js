// Daily Challenge: 99 Bottles Of Beer
// Last Updated: September 22nd, 2023

// What You Will Learn :
// Use functions, loops and conditionals


// Instructions
// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

// ==============================
// Example
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================



// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect


// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.


// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.


function singBottlesOfBeer() {
    // Prompt user for a number to begin counting down bottles
    let bottles = parseInt(prompt("Enter the number of bottles to start with:"));

    while (bottles > 0) {
        // Determine whether to use "bottle" or "bottles" for grammar
        let bottleWord = bottles === 1 ? "bottle" : "bottles";

        // Sing the current verse
        console.log(`${bottles} ${bottleWord} of beer on the wall`);
        console.log(`${bottles} ${bottleWord} of beer`);
        console.log(`Take ${bottles === 1 ? "it" : bottles} down, pass ${bottles === 1 ? "it" : "them"} around`);

        // Update the number of bottles
        bottles--;

        // Sing the next verse
        bottleWord = bottles === 1 ? "bottle" : "bottles";
        console.log(`${bottles === 0 ? "No more" : bottles} ${bottleWord} of beer on the wall\n`);
    }

    // Sing the final verse
    console.log("No more bottles of beer on the wall");
}

// Call the function to start singing
singBottlesOfBeer();

