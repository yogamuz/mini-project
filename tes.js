const showQuantity = document.getElementById('showquantity');
const addCart = document.getElementById('add-to-cart');
const cartplus2 = document.getElementById('cartplus2');
const cartplus3 = document.getElementById('cartplus3');
const resetQuantity = document.getElementById('reset-quantity');

let quantity = 0;
let word = 'Show Quantity : '

showQuantity.addEventListener('click', function () {
    console.log(`${word} ${quantity}`)
});
addCart.addEventListener('click', function () {
    quantity += 1;
    console.log(`${word} ${quantity}`)
});
cartplus2.addEventListener('click', function () {
    quantity += 2;
    console.log(`${word} ${quantity}`)
});
cartplus3.addEventListener('click', function () {
    quantity += 3;
    console.log(`${word} ${quantity}`)
});
resetQuantity.addEventListener('click', function () {
    console.log('Cart was reset.')
    quantity = 0;
    console.log(`${word} ${quantity}`)
})

const batu = document.getElementById('rock');
const kertas = document.getElementById('paper');
const gunting = document.getElementById('scissors');

let ComputerPick = ''
let result;

function PlayerMove() {
    
}

function ComputerMove() {
    randomnumber = Math.random();

    if (randomnumber >= 0 && randomnumber < 0.33) {
        ComputerPick = 'Rock'
    } else if (randomnumber >= 0 && randomnumber < 0.66) {
        ComputerPick = 'Paper'
    } else if (randomnumber >= 0 && randomnumber < 1) {
        ComputerPick = 'Scissors'
    }
    return ComputerMove;
}
batu.addEventListener('click', function () {
    ComputerMove();
    if (ComputerPick == 'Rock') {
        result = 'Tie!'
    } else if (ComputerPick == 'Paper') {
        result = 'You Lose!'
    } else if (ComputerPick == 'Scissors') {
        result = 'You Win!'
    }
   console.log(`You Picked Rock. Computer picked ${ComputerPick}. Result : ${result}`)

})
kertas.addEventListener('click', function(){
    ComputerMove()
    if (ComputerPick == 'Paper') {
        result = 'Tie!'
    } else if(ComputerPick == 'Scissors') {
        result = 'You Lose!'
    } else if (ComputerPick == 'Rock') {
        result = 'You Win!'
    }
   console.log(`You Pick Paper. Computer Picked ${ComputerPick}. Result : ${result} `)
});
gunting.addEventListener('click', function(){
    ComputerMove()
    if (ComputerPick == 'Scissors') {
        result = 'Tie!'
    } else if(ComputerPick == 'Rock') {
        result = 'You Lose!'
    } else if (ComputerPick == 'Paper') {
        result = 'You Win!'
    }
   console.log(`You Pick Scissors. Computer Picked ${ComputerPick}. Result : ${result} `)
});


