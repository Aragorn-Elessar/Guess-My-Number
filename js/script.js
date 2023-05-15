'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;
let score = 20;

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
