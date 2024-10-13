
const batu = document.getElementById('batu');
const kertas = document.getElementById('kertas');
const gunting = document.getElementById('gunting');


batu.addEventListener('click', function () {
    let ComputerMove = '';
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        ComputerMove = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        ComputerMove = 'Paper'

    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        ComputerMove = 'Scissors'
    }

    let result = '';

    if (ComputerMove === 'Rock') {
        result = 'Tie';
    } else if (ComputerMove === 'Paper') {
        result = 'You lose!';
    } else if (ComputerMove === 'Scissors') {
        result = 'You Win!'

    }
    console.log(result)
    alert(`You picked Rock. Computer picked ${ComputerMove}. The result is : ${result}`);

})

kertas.addEventListener('click', function () {
    let ComputerMove = ''
    randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        ComputerMove = 'Paper';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        ComputerMove = 'Rock';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        ComputerMove = 'Scissors';
    }

    let result = '';
    if (ComputerMove === 'Paper') {
        result = 'Tie!';
    } else if (ComputerMove === 'Rock') {
        result = 'You Win!';
    } else if (ComputerMove === 'Scissors') {
        result = 'You Lose!';
    }
    console.log(result);
    alert(`You picked Paper. Computer picked ${ComputerMove}. The result is : ${result}`);

})

gunting.addEventListener('click', function () {
    randomNumber = Math.random();
    let ComputerMove;


    if (randomNumber >= 0 && randomNumber < 0.33) {
        ComputerMove = 'Scissors';
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
        ComputerMove = 'Paper';
    } else if (randomNumber >= 0.66 && randomNumber < 1) {
        ComputerMove = 'Rock';
    }

    let result = '';

    if (ComputerMove === 'Scissors') {
        result = 'Tie!';
    } else if (ComputerMove === 'Paper') {
        result = 'You Win!';
    } else if (ComputerMove === 'Rock') {
        result = 'You Lose!';
    }
    console.log(result);
    alert(`You picked Scissors. Computer picked ${ComputerMove}. The result is : ${result}`);


})