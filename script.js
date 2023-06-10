const questionContainer = document.getElementsByClassName("question-div");
const showAnswer = document.getElementsByClassName("show-answer");

console.log(questionContainer.length)
for(let i = 0; i < questionContainer.length; i++){
    questionContainer[i].addEventListener('click', function (){
        this.classList.toggle('active');
        if(this.classList.contains('active')){
           this.querySelector('.show-answer').innerText = '_';
        }
        else{
            this.querySelector('.show-answer').innerText = '+';
        }

    });
}