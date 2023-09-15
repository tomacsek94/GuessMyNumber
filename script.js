'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //No input
    // document.querySelector('.message').textContent = 'No number⛔';
    displayMessage('No number⛔');
    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number!🎉';
    displayMessage('Correct number!🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').innerHTML = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    //High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').innerHTML = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').innerHTML =
      //   guess > secretNumber ? 'Too high!📈' : 'Too low!📉';
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      // document.querySelector('.message').innerHTML = '💥You lost the game';
      displayMessage('💥You lost the game');
      document.querySelector('.score').innerHTML = 0;
    }
    // } else if (guess > secretNumber) {
    //   //When guess is to high
    //   if (score > 1) {
    //     document.querySelector('.message').innerHTML = 'Too high!📈';
    //     score--;
    //     document.querySelector('.score').innerHTML = score;
    //   } else {
    //     document.querySelector('.message').innerHTML = '💥You lost the game';
    //     document.querySelector('.score').innerHTML = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   //When guess is to low
    //   if (score > 1) {
    //     document.querySelector('.message').innerHTML = 'Too low!📉';
    //     score--;
    //     document.querySelector('.score').innerHTML = score;
    //   } else {
    //     document.querySelector('.message').innerHTML = '💥You lost the game';
    //     document.querySelector('.score').innerHTML = 0;
    //   }
    // }
  }
});

const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('.score').innerHTML = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
  });
