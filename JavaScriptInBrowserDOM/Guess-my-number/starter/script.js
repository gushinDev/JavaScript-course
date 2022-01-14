'use strict';

const againBtn = document.querySelector('.btn.again');
const checkBtn = document.querySelector('.btn.check');
const inputNumber = document.querySelector('.guess');
const body = document.querySelector('body');

let guessNumber = document.querySelector('.number');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let header = document.querySelector('h1');
let randomNumber;

startNewGame();

againBtn.addEventListener('click', startNewGame);

checkBtn.addEventListener('click', function () {
  if (!inputNumber.value) {
    setMessageTextContent('Please enter a number!');
    return;
  }

  if (+inputNumber.value > randomNumber) {
    decrementScore('high');
  } else if (+inputNumber.value < randomNumber) {
    decrementScore('low');
  } else {
    setMessageTextContent('Correct!');

    if (highscore.textContent < score.textContent) {
      highscore.textContent = score.textContent;
    }
    guessNumber.textContent = randomNumber;
    body.style.backgroundColor = 'green';
    checkBtn.disabled = true;
  }
});

function startNewGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  setMessageTextContent('Start guessing...');
  score.textContent = 20;
  guessNumber.textContent = '?';
  inputNumber.value = '';
  body.style.backgroundColor = '#222';
  checkBtn.disabled = false;
}

function stopTheGame(score) {
  if (score === '1') {
    body.style.backgroundColor = 'rgb(230, 72, 72)';
    setMessageTextContent('You lost the game!');
    checkBtn.disabled = true;
  }
}

function decrementScore(isLowOrHigh) {
  setMessageTextContent(`Too ${isLowOrHigh}!`)
  stopTheGame(score.textContent);
  score.textContent = +score.textContent - 1;
}

function setMessageTextContent(text) {
  message.textContent = text;
}