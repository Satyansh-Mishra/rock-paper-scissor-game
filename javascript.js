function gethumanchoice(){
    let humanchoice = prompt("Enter your choice (rock, paper, scissors): ");
    return humanchoice.toLowerCase();
}
function getcomputerchoice(){
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
var humanScore=0;
var computerScore=0;
function playRound(humanChoice,computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    console.log("You win! Rock beats Scissors.");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    console.log("You win! Paper beats Rock.");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    console.log("You win! Scissors beats Paper.");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    console.log("You lose! Paper beats Rock.");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    console.log("You lose! Scissors beats Paper.");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    console.log("You lose! Rock beats Scissors.");
  } else if (humanChoice == computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log("Invalid input.");
  }
}
    
for (let index = 0; index < 5; index++) {
    let humanSelection = gethumanchoice();
    let computerSelection = getcomputerchoice();

playRound(humanSelection, computerSelection);
console.log("Score - Human: " + humanScore + ", Computer: " + computerScore);
    
}
if (humanScore>computerScore) {
    console.log("you win");
}else if(computerScore>humanScore){
    console.log("you lose");
}else{
    console.log("it's a tie");
}