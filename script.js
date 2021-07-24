

function computerSelection() {
    let randomNum = Math.floor((Math.random() * 3));
    if (randomNum === 0) {
        return "ROCK";
    } else if (randomNum === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playerSelection() {
    let selection = (prompt("Please select either Rock, Paper, or Scissors")).toUpperCase();
    return (selection === "ROCK" || selection === "PAPER" || selection === "SCISSORS") ? selection : alert("Input not accepted. Please check your spelling!");
}

function playRound(PS, CS) {
    if (PS === CS) {
        console.log("Draw!");

    } else if (PS === undefined) {
        console.log("Game aborted!");
    } else if (PS === "PAPER" && CS === "ROCK") {
        console.log("Player wins!");
    } else if (PS === "ROCK" && CS === "SCISSORS") {
        console.log("Player wins!");
    } else if (PS === "SCISSORS" && CS === "PAPER") {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}

function game () {
    let player = playerSelection();
    let computer = computerSelection();
    console.log(player, computer);
    playRound(player,computer);
}