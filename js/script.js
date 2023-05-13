'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

// Handle user guessed number input
document.querySelector('.check').addEventListener('click', function () {
  // Grab the guessed number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Notify user if a zero value or no number entered
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
});
