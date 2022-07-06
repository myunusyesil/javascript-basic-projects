const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const value = document.querySelector('.color');

btn.addEventListener ('click', function() {
    let hexCode = '#';
   for (let x = 0 ; x <6 ; x++) {
    var random = randomNum();
    hexCode += hex[random];
   }
    console.log(hexCode);
    document.body.style.backgroundColor = hexCode;
    value.textContent = hexCode;
});

/* Generating random number between 0-15 and floor it nearest integer*/
function randomNum () {
    return Math.floor(Math.random()*hex.length);
}