const question = [
    
    {
        question:"The demand of pakistan is based on",
        answer:[
            {text:"development of muslims",correct: false },
            {text:"two nation theory",correct: true },
            {text:"nationalism",correct: false },
            {text:"hindu muslim conflict",correct: false },

        ]
    },
    {
        question:"Pakistan became a member of the uno in the year",
        answer:[
            {text:"1947",correct: false},
            {text:"1948",correct: true },
            {text:"1949",correct: false },
            {text:"1950",correct: false },

        ]
    },
    {
        question:"The major import of pakistan is",
        answer:[
            {text:"petroleum",correct: true },
            {text: "leather goods",correct: false },
            {text:"rice",correct: false },
            {text:"sports goods",correct: false },

        ]
    },
    {
        question:"Best university in pakistan",
        answer:[
            {text:"NED",correct: false},
            {text: "ku",correct: false },
            {text:"iqra university",correct: false },
            {text:"koi bhi nhi",correct: true },

        ]
    },{
        question:"Who is the current world best batsman",
        answer:[
            {text:"virat kohli",correct: false},
            {text: "BABAR AZAM",correct: true},
            {text:"steve smith",correct: false },
            {text:"joe root",correct: false },

        ]
    },
    {
        question:"Alama iqbal was born in thr city",
        answer:[
            {text:"sailkot",correct: true },
            {text:"karachi",correct: false },
            {text:"delhi",correct: false },
            {text:"lahore",correct: false },

        ]
    },
] 

const questionElement = document.getElementById("question")
const ansBtn = document.getElementById("ansbtn")
const nextBtn = document.getElementById("next")

let score = 0
let currentQuestionindex = 0

function startquiz(){
    currentQuestionindex = 0
    score = 0
    nextBtn.innerHTML="Next"
    showQuestion()
}
function showQuestion(){
    resetState()
    let currentquestion = question[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElement.innerHTML= `${questionNo} . ${currentquestion.question}` 
    
    currentquestion.answer.forEach(answer =>{
    // ansBtn.innerHTML=currentquestion.answer 
    const button = document.createElement("button")
    button.innerHTML = answer.text
    button.classList.add(`btn`)
    ansBtn.appendChild(button)
    if(answer.correct){
      button.dataset.correct=answer.correct ; 
    }
    button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextBtn.style.display="none"
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild)
    }
}

function selectAnswer(e){
  const selectedBtn = e.target;  
  const iscorrect = selectedBtn.dataset.correct === "true"
  if(iscorrect){
    selectedBtn.classList.add("correct")
    score++;

  }else{
    selectedBtn.classList.add("incorrect")
  }
  Array.from(ansBtn.children).forEach(button =>{
    if(button.dataset.correct === "true"){
    button.classList.add("correct")
    }
    button.disabled = true
  })
  nextBtn.style.display = "block" 
//   button.dataset.correct=answer.correct ; 
}
nextBtn.addEventListener("click",()=>{
    if(currentQuestionindex < question.length){
    handlenextBTN();
}else{
  startquiz()
}
})

function handlenextBTN(){
   currentQuestionindex++;
   if(currentQuestionindex < question.length){
    showQuestion()
   }else{
    showscore()
   }
}

function showscore(){
    resetState()
    questionElement.innerHTML = `you scored ${score} is ${question.length}`
    nextBtn.innerHTML = `Play Again`
    nextBtn.style.display = "block"
}

startquiz()