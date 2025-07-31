
function getcomputerchoice() {
  const randomnum = Math.floor(Math.random() * 3);

  if (randomnum == 0) {
    return "rock";
  }
  else if (randomnum == 1) {
    return "paper";
  }
  else return "scissor";
}

console.log(getcomputerchoice());

function getHumanChoice() {
  const userInput = prompt("Enter your choice: rock, paper, or scissors");
  return userInput;
}

console.log("Human chose: " + getHumanChoice());


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }


    console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);

  }
  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}:`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("\nFinal Result:");
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lost the game.");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

playGame();
