const batu = document.getElementById('batu');
const kertas = document.getElementById('kertas');
const gunting = document.getElementById('gunting');
const pesanhasil = document.getElementById('pesan')
const pesanscore = document.getElementById('pesan-score')
const resetscore = document.getElementById('reset-score')
let ComputerMove = '';
let result;
// Periksa apakah score ada di localStorage
let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
    }
}
console.log(score)
// Fungsi untuk memulai permainan
function Playergame(PlayerMove) {
    const ComputerMove = ComputerPick();
    if (PlayerMove === 'Rock') {
        if (ComputerMove === 'Rock') {
            result = 'Tie!';
        } else if (ComputerMove === 'Paper') {
            result = 'You Lose!';
        } else if (ComputerMove === 'Scissors') {
            result = 'You Win!';
        }
    } else if (PlayerMove === 'Paper') {
        if (ComputerMove === 'Paper') {
            result = 'Tie!';
        } else if (ComputerMove === 'Rock') {
            result = 'You Win!';
        } else if (ComputerMove === 'Scissors') {
            result = 'You Lose!';
        }
    } else if (PlayerMove === 'Scissors') {
        if (ComputerMove === 'Scissors') {
            result = 'Tie!';
        } else if (ComputerMove === 'Paper') {
            result = 'You Win!';
        } else if (ComputerMove === 'Rock') {
            result = 'You Lose!';
        }
    }
    // Update skor berdasarkan hasil permainan
    if (result === 'You Win!') {
        score.wins += 1;
    } else if (result === 'You Lose!') {
        score.losses += 1;
    } else if (result === 'Tie!') {
        score.ties += 1;
    }
    // Simpan skor yang diperbarui ke localStorage
    localStorage.setItem('score', JSON.stringify(score));
    // Update tampilan hasil permainan dan skor
    pesanhasil.textContent = `You picked ${PlayerMove}. Computer picked ${ComputerMove}. The result is : ${result}`;
    pesanscore.textContent = `Wins: ${score.wins}\nLosses: ${score.losses}\nTies: ${score.ties}`;
}
// Fungsi untuk memilih gerakan komputer
function ComputerPick() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'Rock';
    } else if (randomNumber < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
// Fungsi untuk mereset skor
function resetTotalScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    // Simpan skor yang direset ke localStorage
    // Update tampilan skor
    pesanscore.textContent = `Wins: ${score.wins}\nLosses: ${score.losses}\nTies: ${score.ties}`;
    localStorage.removeItem('score', JSON.stringify(score));
}
// Tambahkan event listener pada elemen
batu.addEventListener('click', function () {
    Playergame('Rock');
});
kertas.addEventListener('click', function () {
    Playergame('Paper');
});
gunting.addEventListener('click', function () {
    Playergame('Scissors');
});
resetscore.addEventListener('click', function () {
    resetTotalScore();
});
const object1 = {
    rate: 15000
}
// derustructuring 
const {rate} = object1;
console.log(rate)
// shorthand property & method
const object2 ={
    rate,
    method() {
        console.log('BANGSAT'.toLowerCase())
    }
}
console.log(object2)
object2.method();