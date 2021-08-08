function computerSelection() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "ROCK";
  } else if (randomNum === 1) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}
/*
function playerSelection() {
  let selection = prompt(
    "Please select either Rock, Paper, or Scissor"
  ).toUpperCase();
  return selection === "ROCK" ||
    selection === "PAPER" ||
    selection === "SCISSOR"
    ? selection
    : alert("Input not accepted. Please check your spelling!");
}
*/
function playRound(PS, CS) {
  if (PS === CS) {
    result.textContent = `You picked ${PS} and the computer picked ${CS}. The result is a draw!`;
  } else if (PS === undefined) {
    console.log("Game aborted!");
  } else if (PS === "PAPER" && CS === "ROCK") {
    result.textContent = `You picked ${PS} and the computer picked ${CS}. You WIN!`;
    incPlayerScore();
    alert(`You picked ${PS} and the computer picked ${CS}. You WIN!`);
  } else if (PS === "ROCK" && CS === "SCISSOR") {
    result.textContent = `You picked ${PS} and the computer picked ${CS}. You WIN!`;
    incPlayerScore()
    alert(`You picked ${PS} and the computer picked ${CS}. You WIN!`);
  } else if (PS === "SCISSOR" && CS === "PAPER") {
    result.textContent = `You picked ${PS} and the computer picked ${CS}. You WIN!`;
    incPlayerScore()
    alert(`You picked ${PS} and the computer picked ${CS}. You WIN!`);
  } else {
    result.textContent = `You picked ${PS} and the computer picked ${CS}. The Computer WINS! :-(`;
    alert(`You picked ${PS} and the computer picked ${CS}. The Computer WINS! :-(`);
  }
}

function incPlayerScore() {
  playerScore += 1;
  announceScore(playerScore);
  if (playerScore >= 5 && (dontRunAgain === 0)) {
    const secretCode = document.querySelector('.secretCode')
    let randomNumber = Math.floor(Math.random() * 1000);
    secretCode.textContent = `You secret code is ${randomNumber}`;
    dontRunAgain = 1;
  }
}

function announceScore (num) {
  const score = document.querySelector('.score');
  score.textContent = `Your score is: ${num}.`
}

function game(e) {
  let player = e.explicitOriginalTarget.innerText;
  let computer = computerSelection();
  //console.log(`You picked ${player}, while the computer picked ${computer}.`);

  playRound(player, computer);
}
let dontRunAgain = 0;
let playerScore = 0;
const result = document.querySelector('.result');
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', game));
/*btn.addEventListener('click', e => console.log(e.explicitOriginalTarget.innerText));
const btnValue= */