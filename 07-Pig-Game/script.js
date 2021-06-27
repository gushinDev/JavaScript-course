'use strict';

const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');

const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');

const current_0 = document.querySelector('#current--0');
const current_1 = document.querySelector('#current--1');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');


//Start new game
btnNewGame.addEventListener('click', function(){
    
    resetAllScores();
    
    dice.removeAttribute('src');
    dice.setAttribute('src', 'dice-1.png');
    
    removeWinners(player_0, player_1);
    
    removeAttributeDisabled();
    
    if(playerIsActive(player_1)){
        changeActivePlayer(player_1, player_0)
    }
})

//Бросаем кубики
btnRollDice.addEventListener('click', function(){
    
    let randomNumber = Math.trunc(Math.random() * 6 + 1);
    changeDiceValue(randomNumber);
    
    if(playerIsActive(player_0)){
    
        playerThrowDice(current_0, randomNumber);
        
        if(randomNumber === 1){
            current_0.textContent = 0;
            changeActivePlayer(player_0, player_1)
        }

    }else{
        
        playerThrowDice(current_1, randomNumber);

        if(randomNumber === 1){
            current_1.textContent = 0;
            changeActivePlayer(player_1, player_0)
        }
    }
})

//Сохранить значение в общийй счет
btnHold.addEventListener('click', function(){
    if(player_0.getAttribute('class').includes('player--active')){
        saveToScore(score_0, current_0);
        searchWinner(player_0, player_1, score_0);
    }else{
        saveToScore(score_1, current_1);
        searchWinner(player_1, player_0, score_1);
    }
    
})
//Сохраняет текущий счет в общий
function saveToScore(score, currentScore){
    let currenScoreSum = Number(currentScore.textContent);
    currenScoreSum += Number(score.textContent);
    score.textContent = currenScoreSum;
    currentScore.textContent = 0;
}
//Если счет больше 30, то игрок выиграл
function searchWinner(activePlayer, passivePlayer, score){
        
    changeActivePlayer(activePlayer, passivePlayer)
    if(score.textContent > 30){
        activePlayer.classList.add('player--winner');
        setAttributeDisabled(); 
    }
}

function setAttributeDisabled(){
    btnRollDice.setAttribute('disabled', 'disabled'); 
    btnHold.setAttribute('disabled', 'disabled'); 
}

function removeWinners(player_0, player_1){
    player_0.classList.remove('player--winner');
    player_1.classList.remove('player--winner');
}
function changeActivePlayer(activePlayer, passivePlayer){
    activePlayer.classList.remove('player--active');
    passivePlayer.classList.add('player--active');
}

function changeDiceValue(randomNumber){
    dice.removeAttribute('src');
    dice.setAttribute('src', 'dice-' + randomNumber + '.png');
}
function removeAttributeDisabled(){
    btnRollDice.removeAttribute('disabled'); 
    btnHold.removeAttribute('disabled');  
}

function playerIsActive(player){
    return player.getAttribute('class').includes('player--active')
}

function playerThrowDice(currentValuePlayer, randomNumber){
    let scoreZero = Number(currentValuePlayer.textContent);
        scoreZero += randomNumber; 
        currentValuePlayer.textContent = scoreZero;
}

function resetAllScores(){
    score_0.textContent = 0;
    score_1.textContent = 0;
    
    current_0.textContent = 0;
    current_1.textContent = 0;
}