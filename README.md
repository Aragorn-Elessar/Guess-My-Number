# Guess My Number Project

## Table of Contents

- [Project-Description](#Project-Description)
- [Prerequisites](#Prerequisites)
- [Installing](#Installing)
- [Steps](#Steps)
- [Author](#Author)
- [Credits](#Credits)

## Project-Description

The starter project had some HTML and CSS styling to display a static version of the game interface. I needed to convert this project from a static page to an interactive one using JavaScript.

## Prerequisites

Any code editor (e.g: VSCode, Atom,... etc)

## Installing

Terminal commands to start using project:

- Get a copy on your machine

```
`git clone https://github.com/Aragorn-Elessar/Guess-My-Number.git`
```

- Call into the directory location

```
`cd Guess-My-Number`
```

- Opens code in `VSCode`

```
`code .`
```

## Steps

- Define global variables

```js
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = '';
const enteredNumber = document.querySelector('.guess');
```

- Create helping functions to make it easier to set different values for the game interface

```js
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
```

- An event listener that handles the user input on `Check!` button mouse click

```js
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
```

- Reset the game interface to the original state on `Again!` button mouse click

```js
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
```

## Author

[Mahmoud Gadallah](https://github.com/Aragorn-Elessar)

## Credits

A [Udemy](https://www.udemy.com) project, provided by [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/) JavaScript course
