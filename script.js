'use strict';
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
const highScoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const againEl = document.querySelector('.again');
const checkEl = document.querySelector('.check');

checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = 'No Number! 🎉';
  } else if (guess === SecretNumber) {
    numberEl.textContent = SecretNumber;
    messageEl.textContent = 'Correct Number';
    bodyEl.style.backgroundColor = 'green';
    numberEl.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (guess > SecretNumber) {
    if (score > 1) {
      messageEl.textContent = 'Secret Number is is smaller!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'You lost the game 💥';
      scoreEl.textContent = '0';
    }
  } else if (guess < SecretNumber)
    if (score > 1) {
      messageEl.textContent = 'Secret Number is is bigger!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'You lost the game 💥';
      scoreEl.textContent = '0';
      guessEl.value = '';
    }
});

againEl.addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
