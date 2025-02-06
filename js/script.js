//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

 
// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

// if exitQuiz button clicked   
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
}
//if continueQuiz button clicked        
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(0); //calling showQestions function
}

let que_count = 0;      

// getting questions and options from array
function showQuestions(){
        const que_text = document.querySelector(".que_text");
        let que_tag = '<span>'+ questions[que_count].numb + ". " + questions[que_count].question +'</span>';

}