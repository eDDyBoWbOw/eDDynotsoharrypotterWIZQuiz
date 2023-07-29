const quizData = [
    {
        question: "What house did Harry Potter belong to?",
        options: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        answer: "Gryffindor"
    },
    {
        question: "What is the name of Harry's pet owl?",
        options: ["Hedwig", "Errol", "Crookshanks", "Fawkes"],
        answer: "Hedwig"
    },
    {
        question: "Who is the Half-Blood Prince?",
        options: ["Draco Malfoy", "Severus Snape", "Sirius Black", "Remus Lupin"],
        answer: "Severus Snape"
    },
    {
        question: "Who is the dark lord afraid of?",
        options: ["Harry", "The old man" , "Ron","eDDy With The Long Wand"],
        answer: "eDDy With The Long Wand"
    },
    {
        question: "What house was the best house?",
        options: ["Whatever house eDDy With The Long Wand in","If it has a dragon in it","Does naruto house count?","House of dragons"],
        answer: "Whatever house eDDy With The Long Wand in"
    },
    {
        question:"Who is the greatest Wiz of all time",
        options:["eDDy With The Long Wand","Harry","Dr.Strange","Might Guy"],
        answer:"eDDy With The Long Wand"
    },
];

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;
let timeleft=0;
let timer;
start()
function start () {
    timeleft=60
    document.querySelector(".time").innerHTML=timeleft;

    timer=setInterval(() => {
        timeleft--;
        document.querySelector(".time").innerHTML=timeleft;

        if (timeleft <= 0){
            clearInterval(timer);
            endQuiz();

        };
    }, 1000);
}
console.log();
function endQuiz(){
    clearInterval(timer);

    let scoreboard=`
    <div> GG WIZ </div>
    <p> Final score for Trash Wiz kid is` + score + `/7 </p>
    <input type = "text" id="names" placeholder="Put name here">
    <button onclick="score()">submit </button>
    `;
    
    document.querySelector("#quiz-container").innerHTML=scoreboard;
}


function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerHTML = `
            <input type="radio" id="option${index}" name="answer" value="${option}">
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

function getSelectedOption() {
    const options = document.getElementsByName("answer");
    let selectedOption = "";

    options.forEach(option => {
        if (option.checked) {
            selectedOption = option.value;
        }
    });

    return selectedOption;
}

function submitAnswer() {
    const selectedOption = getSelectedOption();

    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.style.display = "none";
        resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
    }
}

submitButton.addEventListener("click", submitAnswer);

loadQuestion();
function saveScore () {

}