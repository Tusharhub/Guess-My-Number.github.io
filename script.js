'use strict';
//guessing score
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number :)';

// //number and score
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;
// //input
// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);
//check btn
let secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '';
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number :)';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number :)';

    document.querySelector('body').style.backgroundColor = '#8d0000';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
