const showQuantity = document.getElementById("show-quantity")
const addToCart = document.getElementById("add-to-cart")
const plus2 = document.getElementById("plus-2")
const plus3 = document.getElementById("plus-3")
const reset2 = document.getElementById("reset-cart")
const displayElement = document.getElementById("display-quantity"); // E
const displayReset = document.getElementById("display-reset"); // E
const displayMax = document.getElementById("display-max"); // E

let quantity = 0;
let tambah1 = 0;
let maxCart = 12;


showQuantity.addEventListener('click', function () {
    displayElement.textContent = `Cart Quantity: ${quantity}`;
    displayReset.style.display = 'none'

});

addToCart.addEventListener('click', function () {
    // Cek jika quantity belum mencapai maxCart
    if (quantity < maxCart) {
        quantity += 1; // Tambah jumlah barang
        displayElement.textContent = `Cart Quantity: ${quantity}`; // Tampilkan jumlah cart
    } else if (maxCart >= quantity) { // Cek jika quantity sudah mencapai maxCart
        displayMax.textContent = `Cart Quantity Max : ${maxCart}`; // Tampilkan pesan max
        displayElement.style.display = 'none'; // Sembunyikan displayElement
        console.log(quantity);
    }
    displayReset.style.display = 'none'; // Sembunyikan displayReset

});


plus2.addEventListener('click', function () {
    if (quantity < maxCart) {
        quantity += 2; // Tambah jumlah barang
        displayElement.textContent = `Cart Quantity: ${quantity}`; // Tampilkan jumlah cart
    } else if (maxCart >= quantity) { // Cek jika quantity sudah mencapai maxCart
        displayMax.textContent = `Cart Quantity Max : ${maxCart}`; // Tampilkan pesan max
        displayElement.style.display = 'none'; // Sembunyikan displayElement
        console.log(quantity);
    }
    displayReset.style.display = 'none'


});

plus3.addEventListener('click', function () {

    if (quantity < maxCart) {
        quantity += 3; // Tambah jumlah barang
        displayElement.textContent = `Cart Quantity: ${quantity}`; // Tampilkan jumlah cart
    } else if (quantity >= maxCart) { // Cek jika quantity sudah mencapai maxCart
        displayMax.textContent = `Cart Quantity Max : ${maxCart}`; // Tampilkan pesan max
        displayElement.style.display = 'none'; // Sembunyikan displayElement
        console.log(quantity);
    }
    displayReset.style.display = 'none'
});

reset2.addEventListener('click', function () {
    if (quantity < maxCart) {
        quantity = 0 ; // Tambah jumlah barang
        displayElement.textContent = `Cart Quantity: ${quantity}`; // Tampilkan jumlah cart
    } else if (quantity >= maxCart) { // Cek jika quantity sudah mencapai maxCart
        displayMax.textContent = `Cart Quantity Max : ${maxCart}`; // Tampilkan pesan max
        displayElement.style.display = 'none'; // Sembunyikan displayElement
        console.log(quantity);
    }
    // Misalkan kita menggunakan variabel ini untuk menyimpan status
    true ? displayElement.textContent = `Cart Quantity: ${quantity}` : console.log(`${quantity}`);


})




