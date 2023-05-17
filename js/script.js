'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = '';

// Handle user guessed number input
document.querySelector('.check').addEventListener('click', function () {
  // Grab the guessed number
  const guess = Number(document.querySelector('.guess').value);

  // Notify user if a zero value or no number entered
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    // When player wins
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
  } else if (guess > randomNumber && score > 1) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;

    // When guess is too low
  } else if (guess < randomNumber && score > 1) {
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;

    // When the score reaches zero
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = '💥 You lost the game!';
  }
});

// Reset the game on Again! click
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
