"use strict";

let startArea = document.querySelector('.start-area');
let winArea = document.querySelector('.win-area');
let guessNumber = document.querySelector("#guess-number");
let btnGuess = document.querySelector('.btn-guess');
let btnRestart = document.querySelector('.btn-restart');
let randomNumber = Math.floor(Math.random() * 11);

//Button Events
btnGuess.addEventListener('click', () => {
    let number = Number(guessNumber.value);
    if(number === randomNumber) {
            startArea.style.display = "none";
            winArea.style.display = "flex";
    }
})

btnRestart.addEventListener('click', () => {
    startArea.style.display = "flex";
    winArea.style.display = "none";
    guessNumber.value = "";
    randomNumber = Math.floor(Math.random() * 11);
})