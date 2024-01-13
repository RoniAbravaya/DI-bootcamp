// Instructions
// Using this array:

// const gameInfo = [
//  {
//    username: "john",
//    team: "red",
//    score: 5,
//    items: ["ball", "book", "pen"]
//  },
//  {
//    username: "becky",
//    team: "blue",
//    score: 10,
//    items: ["tape", "backpack", "pen"]
//  },
//  {
//    username: "susy",
//    team: "red",
//    score: 55,
//    items: ["ball", "eraser", "pen"]
//  },
//  {
//    username: "tyson",
//    team: "green",
//    score: 1,
//    items: ["book", "pen"]
//  },
// ];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]


// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]


// 3. Find and display the total score of the users. (Hint: The total score is 71)





const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
  // Task 1: Create an array with exclamation points at the end of usernames
  const usernames = [];
  gameInfo.forEach((player) => {
    usernames.push(`${player.username}!`);
  });
  console.log("Usernames with exclamation points:", usernames);
  
  // Task 2: Create an array with usernames of players with a score bigger than 5
  const winners = [];
  gameInfo.forEach((player) => {
    if (player.score > 5) {
      winners.push(player.username);
    }
  });
  console.log("Usernames of players with score bigger than 5:", winners);
  
  // Task 3: Find and display the total score of the users
  const totalScore = gameInfo.reduce((sum, player) => sum + player.score, 0);
  console.log("Total score of the users:", totalScore);
  