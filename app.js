let str = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return str[Math.floor(Math.random() * str.length)];
}

function getHumanChoice() {
  let choice = prompt("Please Enter Your Choice (rock, paper, or scissor)").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissor") {
    return choice;
  } else {
    alert("Please pick Rock, Paper, or Scissor");
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  let computerSelection = getComputerChoice();
  let humanSelection = getHumanChoice();

  if (
    (humanSelection === "rock" && computerSelection === "scissor") ||
    (humanSelection === "scissor" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    alert("You win!");
    humanScore++;
  } else if (humanSelection === computerSelection) {
    alert("It's a tie!");
  } else {
    alert("Computer wins!");
    computerScore++;
  }
}

if (humanScore > computerScore) {
  alert("You are the Winner!");
} else if (humanScore < computerScore) {
  alert("Computer wins!");
}

