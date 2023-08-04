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
    return `Draw! ${parsedPlayerSelection} against ${computerSelection}`;
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

function game(){
  let playerScore = 0;
  let computerScore = 0;

  for(let i=0; i<5; i++){
    const result = playRound(prompt("rock, paper or scissors?"), getComputerChoice());
    if (result[4] === "w"){
      playerScore++;  
    }
    else if (result[4] === "l"){
      computerScore++;
    }
    console.log(result + `. Player ${playerScore} - Computer ${computerScore}`);
  }
}
game();