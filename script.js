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
  let result = "";
  if (parsedPlayerSelection === computerSelection){
    result = `Draw! ${parsedPlayerSelection} against ${computerSelection}.`;
  }
  else if ((parsedPlayerSelection === "rock" && computerSelection === "scissors") || 
  (parsedPlayerSelection === "paper" && computerSelection === "rock") ||
  (parsedPlayerSelection === "scissors" && computerSelection === "paper")) {
    result = `You win the round! ${parsedPlayerSelection} beats ${computerSelection}.`;
  }
  else {
    result = `You lose the round! ${computerSelection} beats ${parsedPlayerSelection}.`;
  }
  display.textContent = result;
  return result;
}

function keepScore(result){
    if(playerScore === 5 || computerScore === 5)
      return;
    if (result[0]==="D")
      return;
    if (result[4] === "w"){
      playerScore++;  
    }
    else if (result[4] === "l"){
      computerScore++;
    }
    scoreCard.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    if(playerScore === 5){
      announceWinner("You");
    }
    if(computerScore === 5){
      announceWinner("Computer");
    }
}

function announceWinner(winner){
  display.textContent = `${winner} won the game!`;
  rock.removeEventListener("click", playRock)
  paper.removeEventListener("click", playPaper);
  scissors.removeEventListener("click", playScissors);
  
}

function playRock() {
    keepScore(playRound("rock", getComputerChoice()));
}
function playPaper() {
  keepScore(playRound("paper", getComputerChoice()));

}
function playScissors () {
  keepScore(playRound("scissors", getComputerChoice()));
}

let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const display = document.querySelector("#display");
const scoreCard = document.querySelector("#score-card");

rock.addEventListener("click", playRock)
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);