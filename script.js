"use strict";

//Initializing the Variables - Getting elements from DOM
let startArea = document.querySelector('.start-area');
let winArea = document.querySelector('.win-area');
let wrongMsg = document.querySelector('.wrong-msg');
let errorMsg = document.querySelector('.error-msg');
let guessNumber = document.querySelector("#guess-number");
let btnGuess = document.querySelector('.btn-guess');
let btnRestart = document.querySelector('.btn-restart');
//Generating the first random number
let randomNumber = Math.floor(Math.random() * 11);

//Button Events and Click Functions
btnGuess.addEventListener('click', () => {
    let number = Number(guessNumber.value);     //Getting the value of the input every time we click the GUESS button

    if(number < 0 || number > 10) {             //Showing the error msg when entered the wrong interval
        if(wrongMsg.style.display === "block") {    //If the msg of wrong number is displayed and the user type the wrong interval the wrongMsg leave the page
            wrongMsg.style.display = "none";
            errorMsg.style.display = "block"
        } else {
            errorMsg.style.display = "block";
        }
    } else {
        if(number === randomNumber) {
            errorMsg.style.display = "none";
            startArea.style.display = "none";
            wrongMsg.style.display = "none";
            winArea.style.display = "flex";
        } else {
            errorMsg.style.display = "none";
            wrongMsg.style.display = "block";
            guessNumber.value = "";
        }
    }
})

btnRestart.addEventListener('click', () => {
    startArea.style.display = "flex";
    winArea.style.display = "none";
    guessNumber.value = "";                     //cleaning the input when we reset the game
    randomNumber = Math.floor(Math.random() * 11);      //Restarting the random number for the next game
})
