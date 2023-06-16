'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = '14';

// console.log(document.querySelector('.guess').value);

let secretNo = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'There is no input value !!';
  } else if (guess === secretNo) {
    document.querySelector('.message').textContent = 'You Won';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNo;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game';

      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game';

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNo = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number ').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
