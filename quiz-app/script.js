const quizData =[
    {
        question:'How many letters in word "ALPHABETS"',
        a:'10',
        b:'8',
        c:'9',
        d:'7',
        correct:'b'
    },

    {
        question:'Who owns Spacex ?',
        a:'Tony MUSK',
        b:'Elon MUSK',
        c:'Mukesh AMBANI',
        d:'None of These',
        correct:'b'
    },

    {
        question:'Who is the prime Minister of India ?',
        a:'Modi',
        b:'Gandhi',
        c:'Mayawati',
        d:'kezriwal',
        correct:'a'
    },
    {
        question:'What does HTML stands for ?',
        a:'HYPER TEXT MARKUP  LANGUAGE',
        b:'HYPER TUTORIAL FOR MARKUP LANGUAGE',
        c:'HELLO THIS IS MARKUP LANGUAGE',
        d:'None of These',
        correct:'a'
    }
]



const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz() {


    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


