//using selectors inside the element
/* Bu yönetimin anlaşılması biraz daha zor. Bu bölümde butona basıldığında
    diğer açık olanların kapatılması konusunu anlamadım.
    Temel olarak doğrudan elamanı seçtik. Bütün question'ları
    Bu questionları forEach ile döndük ve gönderdiğimiz parametre aracılığıyla
    butonunu aldık. sonra bu button'ları eventlistener ile click dinledik

*/

const questions = document.querySelectorAll('.question');

questions.forEach( function(question){
    const btn = question.querySelector('.question-btn')
    // console.log(btn);
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            // console.log(item);
            if (item != question) {
                console.log("item:", item, "question:", question);
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
     });
    // console.log(btn);
});


// traversing the dom
// const questionBtn = document.querySelectorAll('.question-btn');
// console.log(questionBtn);

// questionBtn.forEach( function(btn) {
//     btn.addEventListener('click', function(e){
//         var question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//         console.log(question);
//     });
// });

