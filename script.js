'use strict';
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 🎉';
  } else if (guess === SecretNumber) {
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body ').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Secret Number is is smaller!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < SecretNumber)
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Secret Number is is bigger!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('.score').textContent = '0';
      document.querySelector('.guess').value = '';
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body ').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
