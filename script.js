let humanScore = 0;
let computerScore = 0;

function getcomputerchoice() {
  const randomnum = Math.floor(Math.random() * 3);

  if (randomnum == 0) {
    return "rock";
  }
  else if (randomnum == 1) {
    return "paper";
  }
  else return "scissors";
}

function disableButtons(){
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}
function enableButtons(){
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}
function restartGame() {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("score").textContent = `Score => You: ${humanScore}, Computer: ${computerScore}`;
  enableButtons();
  document.getElementById("restart").style.display = "none";
}


function playRound(humanChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  if(humanScore >= 5 || computerScore >= 5) return;

  if (humanChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
  }


  document.getElementById("score").textContent = `Score => You: ${humanScore}, Computer: ${computerScore}`;

  if(humanScore == 5 || computerScore == 5){
    if(humanScore == 5){
      resultDiv.textContent += "\n You won the game";
    }else {
      resultDiv.textContent += "\n You lost the game";
    }

    disableButtons();
    document.getElementById("restart").style.display = "inline-block";
  }

}



document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getcomputerchoice());
})
document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getcomputerchoice());
})
document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getcomputerchoice());
})
document.getElementById("restart").addEventListener("click", restartGame);
