const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

/* 
First we need to select button and background color value and 
than addeventlistener to the click me button and manipulate background accordingly

*/

const btn = document.getElementById('btn');
const value = document.querySelector('.color');

btn.addEventListener ('click', function() {
    var random = randomNum();
    document.body.style.backgroundColor = colors[random];
    value.textContent = colors[random];
});

/* Generating random number between 0-4 and floor it nearest integer*/
function randomNum () {
    return Math.floor(Math.random()*4);
}
