// BUTTONS
const button0 = document.getElementById("button0");

// TEXTS
const aiRollText = document.getElementById("aiRollText");
const playerRollText = document.getElementById("playerRollText");
const result = document.getElementById("result");
const playerScoreText = document.getElementById("playerScoreText");
const aiScoreText = document.getElementById("aiScoreText");
const drawText = document.getElementById("drawText");

//DATA
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;
let draw = 0;

// BUTTON ON CLICK THEN STARTS READING FUNCTIONS
button0.addEventListener("click", function () {
  generatePlayerNumber();
  generatePlayerAI();
  evaluation();
})

// Functions (GENERATING RANDOM NUMBER FOR ME AND AI)
function generatePlayerNumber() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  playerRollText.innerHTML = "Player rolled: " + playerRoll;
}

function generatePlayerAI() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
  aiRollText.innerHTML = "AI rolled: " + aiRoll;
}

// CALCULATE THE RESULT AND SHOWING IN BROWSER AND ADDING SCORES
function evaluation() {
  if (playerRoll > aiRoll) {
    result.innerHTML = "You Won";
    playerScore++;
  } else if (aiRoll > playerRoll) {
    result.innerHTML = "You Lost";
    aiScore++;
  } else {
    result.innerHTML = "Draw";
    draw++;
  }
  showScore();
}

// SHOWS THE SCORE
function showScore() {
  playerScoreText.innerHTML = "WON: " + playerScore;
  aiScoreText.innerHTML = "LOST: " + aiScore;
  drawText.innerHTML = "DRAW: " + draw;
}
