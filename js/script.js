'use strict';

/**
 * Global Variables
 *
 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = '';

const enteredNumber = document.querySelector('.guess');

/**
 * Helper Functions
 *
 */
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const secretNumberBoxWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

/**
 * Main Functions
 *
 */
// Handle user guessed number input
document.querySelector('.check').addEventListener('click', function () {
  // Grab the guessed number
  const guess = Number(enteredNumber.value);

  // Notify user if a zero value or no number entered
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displaySecretNumber(secretNumber);

    setBackgroundColor('#60b347');
    secretNumberBoxWidth('30rem');

    // Update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    }

    // When the score reaches zero
  } else {
    setScore(0);
    displayMessage('💥 You lost the game!');
  }
});

// Reset the game on Again! click
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  setScore(score);
  displaySecretNumber('?');
  enteredNumber.value = '';

  setBackgroundColor('#222');
  secretNumberBoxWidth('15rem');
});
