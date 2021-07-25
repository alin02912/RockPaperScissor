function computerSelection() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "ROCK";
  } else if (randomNum === 1) {
    return "PAPER";
  } else {
    console.log("helo");
    return "SCISSOR";
  }
}

function playerSelection() {
  let selection = prompt(
    "Please select either Rock, Paper, or scissor"
  ).toUpperCase();
  return selection === "ROCK" ||
    selection === "PAPER" ||
    selection === "SCISSOR"
    ? selection
    : alert("Input not accepted. Please check your spelling!");
}

function playRound(PS, CS) {
  if (PS === CS) {
    console.log("Draw!");
  } else if (PS === undefined) {
    console.log("Game aborted!");
  } else if (PS === "PAPER" && CS === "ROCK") {
    console.log("Player wins!");
  } else if (PS === "ROCK" && CS === "SCISSOR") {
    console.log("Player wins!");
  } else if (PS === "SCISSOR" && CS === "PAPER") {
    console.log("Player wins!");
  } else {
    console.log("Computer wins!");
  }
}

function game() {
  let player = playerSelection();
  let computer = computerSelection();
  console.log(`You picked ${player}, while the computer picked ${computer}.`);
  playRound(player, computer);
}
