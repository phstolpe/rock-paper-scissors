//function that randoms a number between 0-2.
// each number represents a choice in rock paper scissors
// returns a string

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if(choice == 0)
    return "rock";
  if(choice == 1)
    return "paper"
  if(choice == 2)
    return "scissors"
}

function playRound(playerSelection, computerSelection) {
  const parsedPlayerSelection = playerSelection.toLowerCase();
  if (parsedPlayerSelection === computerSelection){
    return "Draw!";
  }
  else if ((parsedPlayerSelection === "rock" && computerSelection === "scissors") || 
  (parsedPlayerSelection === "paper" && computerSelection === "rock") ||
  (parsedPlayerSelection === "scissors" && computerSelection === "paper")) {
    return `You win! ${parsedPlayerSelection} beats ${computerSelection}`;
  }
  else {
    return `You lose! ${computerSelection} beats ${parsedPlayerSelection}`;
  }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

const result = playRound(playerSelection, computerSelection);
console.log(result);
