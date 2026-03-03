'use strict'
let x = 0;
let body = document.querySelector(".body")
let activePlayer = document.querySelector(".player--active")
let score = document.querySelector(".score")
let finalScorePlayerOne = document.querySelector("#score--0")
let finalScorePlayerTwo = document.querySelector("#score--1")
let currentScorePlayerOne = document.querySelector("#current--0")
let currentScorePlayerTwo = document.querySelector("#current--1")
let playerOneActive = document.querySelector(".player--0")
let playerTwoActive = document.querySelector(".player--1")
let dice = document.querySelector(".dice")
let btnroll = document.querySelector(".btn--roll")
let hold = document.querySelector(".btn--hold")
let remarksPlayerOne = document.querySelector(".remarksOne")
let remarksPlayerTwo = document.querySelector(".remarksTwo")
let reset = document.querySelector(".btn--new")
let currentP1 = 0
let playerOne = 0;
let playerTwo = 0;
let currentP2 = 0

let addPoints = new Audio("addPoints.mp3")
let errorSound = new Audio("error.mp3")
let winSound = new Audio("winner.mp3")
let HoldSound = new Audio("holdSound.mp3")
let gameresetSound = new Audio("gameReset.mp3")

const rollDice = () => {
    x = Math.floor(Math.random() * 6) + 1;
    console.log(x);
    changeDiceImage(x)
   switchPlayer(x)
}


function playSound(sound) {
    const allSounds = [addPoints, winSound, HoldSound, gameresetSound, errorSound];

    allSounds.forEach(s => {
        if (s !== sound) {
            s.pause();
            s.currentTime = 0;
        }
    });

    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

const changeDiceImage = (diceValue) => {
    if (diceValue === 1) {
        switchPlayer()
        return dice.src = "dice-1.png";
    } else if (diceValue == 2) {
        addCurrentScore(diceValue)
        console.log(diceValue)
        dice.src = "dice-2.png";
    } else if (diceValue == 3) {
        addCurrentScore(diceValue)
        console.log(diceValue)
        dice.src = "dice-3.png";
    } else if (diceValue == 4) {
        addCurrentScore(diceValue)
        console.log(diceValue)
        dice.src = "dice-4.png";
    } else if (diceValue == 5) {
        addCurrentScore(diceValue)
        console.log(diceValue)
        dice.src = "dice-5.png";
    } else if (diceValue == 6) {
        addCurrentScore(diceValue)
        console.log(diceValue)
        dice.src = "dice-6.png";
    }
}

btnroll.addEventListener("click", rollDice)


const addCurrentScore = (diceValue) => {
    if (playerOneActive.classList.contains('player--active')) {
        currentP1 += diceValue;
        console.log(currentP1)
        playSound(addPoints)
        currentScorePlayerOne.textContent = currentP1;
    }
    if (playerTwoActive.classList.contains('player--active')) {
        currentP2 += diceValue;
        console.log(currentP2)
        playSound(addPoints)
        currentScorePlayerTwo.textContent = currentP2;
    }
}
const switchPlayer = (diceValue) => {
    if (diceValue == 1) {
        if (playerOneActive.classList.contains('player--active')) {
            playerOneActive.classList.remove('player--active');
            playerTwoActive.classList.add('player--active');
            currentP1 = 0
            playSound(errorSound)
            currentScorePlayerOne.innerHTML = currentP1
        } else {
            playerTwoActive.classList.remove('player--active');
            playerOneActive.classList.add('player--active');
            currentP2 = 0
            playSound(errorSound)
            currentScorePlayerTwo.innerHTML = currentP2
        }
    }
}

const holdScore = (diceValue) => {
    if (playerOneActive.classList.contains('player--active')) {
        playerOneActive.classList.remove('player--active');
        playerTwoActive.classList.add('player--active');

        playerOne += currentP1;
        finalScorePlayerOne.textContent = playerOne;
        console.log(finalScorePlayerOne)
        currentP1 = 0
        playSound(HoldSound)
        currentScorePlayerOne.innerHTML = currentP1


        if (finalScorePlayerOne.textContent >= 100) {
            finalScorePlayerOne.style.fontSize = "3.5rem"
            finalScorePlayerTwo.style.fontSize = "3.5rem"
            playerOneActive.style.backgroundColor = "#84B179"
            finalScorePlayerOne.style.color = "white"
            finalScorePlayerTwo.style.color = "white"
            finalScorePlayerOne.innerHTML = "100"
            remarksPlayerOne.innerHTML = "Player One Won"
            remarksPlayerTwo.innerHTML = "Player Two Loss"
            hold.disabled = true;
            btnroll.disabled = true;
            playSound(winSound)
        }

    } else {
        playerTwoActive.classList.remove('player--active');
        playerOneActive.classList.add('player--active');

        playerTwo += currentP2;
        finalScorePlayerTwo.textContent = playerTwo;
        console.log(finalScorePlayerTwo)
        currentP2 = 0
        playSound(HoldSound)
        currentScorePlayerTwo.innerHTML = currentP2

        if (finalScorePlayerTwo.textContent >= 100) {
            finalScorePlayerOne.style.fontSize = "3.5rem"
            finalScorePlayerTwo.style.fontSize = "3.5rem"
            finalScorePlayerOne.style.color = "white"
            finalScorePlayerTwo.style.color = "white"
            finalScorePlayerTwo.innerHTML = "100"
           remarksPlayerOne.innerHTML = "Player One Won"
            remarksPlayerTwo.innerHTML = "Player Two Lost"
            playerTwoActive.style.backgroundColor = "#84B179"
            hold.disabled = true;
            playSound(winSound)
            btnroll.disabled = true;

        }

    }
}
hold.addEventListener("click", holdScore)


const gamereset = () => {
    currentP1 = 0
    currentP2 = 0
    playerOne = 0;
    playerTwo = 0;
    currentScorePlayerOne.textContent = currentP1;
    currentScorePlayerTwo.textContent = currentP2;
    playerOneActive.style.backgroundColor = ""
    playerTwoActive.style.backgroundColor = ""
    playerOneActive.classList.add('player--active');
    playerTwoActive.classList.remove('player--active');
    finalScorePlayerOne.textContent = playerOne;
    finalScorePlayerTwo.textContent = playerTwo;
    hold.disabled = false;
    remarksPlayerOne.innerHTML = "";
    remarksPlayerTwo.innerHTML = "";
    btnroll.disabled = false;
    playSound(gameresetSound)
}

reset.addEventListener("click", gamereset)