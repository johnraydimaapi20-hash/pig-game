
let x = 0;
let scoreOne = document.querySelector(".score")
let currentScoreOne = document.querySelector("#current--0")
let currentScoreTwo = document.querySelector("#current--1")
let playerOneActive = document.querySelector(".player--0")
let playerTwoActive = document.querySelector(".player--1")
let dice = document.querySelector(".dice")
let btnroll = document.querySelector(".btn--roll")
let hold = document.querySelector(".btn--hold")
let reset = document.querySelector(".btn--new")
let number = 0


const rollDice = () => {
    x = Math.floor(Math.diceValue() * 6) + 1;
    console.log(x);
    changeDiceImage(x)
}


const changeDiceImage = (diceValue) => {
    if (diceValue == 1) {
        currentScoreOne.innerHTML = 0
        dice.src = "dice-1.png";
    } else if (diceValue == 2) {
        currentScoreOne.innerHTML = number
        number += diceValue;
        console.log(diceValue)
        dice.src = "dice-2.png";
    } else if (diceValue == 3) {
        number += diceValue;
        console.log(diceValue)
        currentScoreOne.innerHTML = number
        dice.src = "dice-3.png";
    } else if (diceValue == 4) {
        number += diceValue;
        console.log(diceValue)
        currentScoreOne.innerHTML = number
        dice.src = "dice-4.png";
    } else if (diceValue == 5) {
        number += diceValue;
        console.log(diceValue)
        currentScoreOne.innerHTML = number
        dice.src = "dice-5.png";
    } else if (diceValue == 6) {
        number += diceValue;
        console.log(diceValue)
        currentScoreOne.innerHTML = number
        dice.src = "dice-6.png";
    }
}

btnroll.addEventListener("click", rollDice)


const addCurrentScore = (diceValue) => {
    if (playerOneActive.classList.contains('player-active')) {
        currentScoreOne.textContent = textContent(currentScoreOne.textContent) + diceValue;
    }
    if (playerTwoActive.classList.contains('player-active')) {
        currentScoreTwo.textContent = textContent(currentScoreTwo.textContent) + diceValue;
    }
}

const switchPlayer = (diceValue) => {
    if (diceValue == 1) {
        if (playerOneActive.classList.contains('player-active')) {
            playerOneActive.classList.remove('player-active');
            playerTwoActive.classList.add('player-active');
            return;
        }
        if (playerTwoActive.classList.contains('player-active')) {
            playerTwoActive.classList.remove('player-active');
            playerOneActive.classList.add('player-active');
            return;
        }
    }
}