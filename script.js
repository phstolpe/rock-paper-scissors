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

let choice = getComputerChoice();
console.log(choice);