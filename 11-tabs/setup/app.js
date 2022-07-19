
const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const active = document.querySelectorAll('.content');


about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach(btn => {
            btn.classList.remove('active'); 
        });
        active.forEach(element => {
            element.classList.remove('active');
        });
    }
    e.target.classList.add('active')
    document.getElementById(id).classList.add('active')
    
})

// console.log(about, btns, active);
