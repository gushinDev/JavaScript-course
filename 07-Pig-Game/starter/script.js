'use strict';

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const sectionPl1 = document.querySelector('.player--0');
const sectionPl2 = document.querySelector('.player--1');

let dice = document.querySelector('.dice');
let scorePl1 = document.querySelector('#score--0');
let scorePl2 = document.querySelector('#score--1');
let currentScorePl1 = document.querySelector('#current--0');
let currentScorePl2 = document.querySelector('#current--1');

startNewGame();
/* sectionPl1.classList.remove('player--active') */
buttonNew.addEventListener('click', () => {
  startNewGame();
});

buttonRoll.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${randomNumber}.png`;
  if (randomNumber === 1) {
    if (isActivePlayer(sectionPl1)) {
      scorePl1.textContent = 0;
    } else {
      scorePl2.textContent = 0;
    }
    switchActivePlayer();
    return;
  }
  if (isActivePlayer(sectionPl1)) {
    scorePl1.textContent = +scorePl1.textContent + randomNumber;
  } else {
    scorePl2.textContent = +scorePl2.textContent + randomNumber;
  }
});

buttonHold.addEventListener('click', () => {
  if (isActivePlayer(sectionPl1)) {
    increasePlayerScore(scorePl1, currentScorePl1);
  } else {
    increasePlayerScore(scorePl2, currentScorePl2);  
  }
  switchActivePlayer();
});

function increasePlayerScore(score, currentScore) {
  currentScore.textContent =
      +currentScore.textContent + +score.textContent;
    score.textContent = 0;
    winTheGame(currentScore.textContent);
}

function switchActivePlayer(newGame = false) {
  if (isActivePlayer(sectionPl2) || newGame) {
    switchActivePlayerClass(sectionPl1, sectionPl2);
  } else {
    switchActivePlayerClass(sectionPl2, sectionPl1);
  }
}

function winTheGame(currentScore) {
  if (+currentScore >= 100) {
    buttonHold.disabled = true;
    buttonRoll.disabled = true;
  }
}

function isActivePlayer(playerSection) {
  return playerSection.classList.contains('player--active')
}

function switchActivePlayerClass(addClass, removeClass) {
  addClass.classList.add('player--active');
  removeClass.classList.remove('player--active');
}

function startNewGame() {
  resetAllScores(scorePl1, scorePl2, currentScorePl1, currentScorePl2);
  switchActivePlayer(true);
}
function resetAllScores(...args) {
  args.forEach(element => {
    element.textContent = 0;
  });
}
