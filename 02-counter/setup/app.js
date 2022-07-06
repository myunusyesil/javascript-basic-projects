// counter 0 ayarlıyoruz.
var counter = 0;

// bütün btn class'larını seçiyoruz
// ID'si value olan elamanı seçiyoruz
btns = document.querySelectorAll ('.btn');
value = document.getElementById('value');
console.log (value);

/* btns array'ini dönüyoruz
    ve bütün elamanlara eventlistener ekliyoruz. 
    İlgili class'a sahip olanları seçip counterı manipüle ediyoruz.
*/

btns.forEach( function (btn) {
    btn.addEventListener ('click', function(e) {
        var x = e.currentTarget.classList;
        console.log(x);
        if (x.contains('increase')) {
            counter++;
        }
        else if (x.contains('decrease')) {
            counter--;
        }
        else {
            counter = 0;
        }
        value.textContent = counter;

        if (counter>0) {
            value.style.color = 'green';
        }
        else if (counter<0) {
            value.style.color = 'red';
        }
        else {
            value.style.color = 'black'
        }
    });
});