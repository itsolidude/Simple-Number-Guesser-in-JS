'use strict';
const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = SecretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 🎉';
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    score = score + 2;
    document.querySelector('.score').textContent = score;
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
    }
});
