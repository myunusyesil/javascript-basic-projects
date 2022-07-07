/*
    togglebtn, closebtn ve sidebar'ı gizleyip açan ilgili class'ı seçtik
    daha sonra button'lara eventlistener ekleyerek sidebar'ı 
    kapatıp açan class'ı ekleyip çıkardık. 
*/

const btn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

console.log(btn,closeBtn,sideBar);

btn.addEventListener('click', function(){
    sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('show-sidebar');
})