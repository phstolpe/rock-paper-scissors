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
    result = `Draw! ${parsedPlayerSelection} against ${computerSelection}`;
  }
  else if ((parsedPlayerSelection === "rock" && computerSelection === "scissors") || 
  (parsedPlayerSelection === "paper" && computerSelection === "rock") ||
  (parsedPlayerSelection === "scissors" && computerSelection === "paper")) {
    result = `You win! ${parsedPlayerSelection} beats ${computerSelection}`;
  }
  else {
    result = `You lose! ${computerSelection} beats ${parsedPlayerSelection}`;
  }
  display.textContent = result;
  return result;
}

function keepScore(result){
    if (result[0]==="D")
      return;
    if (result[4] === "w"){
      playerScore++;  
    }
    else if (result[4] === "l"){
      computerScore++;
    }
    scoreCard.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock-btn");
const paper = document.querySelector("#paper-btn");
const scissors = document.querySelector("#scissors-btn");
const display = document.querySelector("#display");
const scoreCard = document.querySelector("#score-card");

rock.addEventListener("click", () => {
  keepScore(playRound("rock", getComputerChoice()))});
paper.addEventListener("click", () => {
  keepScore(playRound("paper", getComputerChoice()))});
scissors.addEventListener("click", () => {
  keepScore(playRound("scissors", getComputerChoice()))});