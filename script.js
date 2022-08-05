"use strict";

//Initializing the Variables
let startArea = document.querySelector('.start-area');
let winArea = document.querySelector('.win-area');
let guessNumber = document.querySelector("#guess-number");
let btnGuess = document.querySelector('.btn-guess');
let btnRestart = document.querySelector('.btn-restart');
let randomNumber = Math.floor(Math.random() * 11);

//Button Events and Click Functions
btnGuess.addEventListener('click', () => {
    let number = Number(guessNumber.value);     //Getting the value of the input every time we click the GUESS button
    if(number === randomNumber) {
            startArea.style.display = "none";
            winArea.style.display = "flex";
    }
})

btnRestart.addEventListener('click', () => {
    startArea.style.display = "flex";
    winArea.style.display = "none";
    guessNumber.value = "";                     //cleaning the input when we reset the game
    randomNumber = Math.floor(Math.random() * 11);      //Restarting the random number for the next game
})