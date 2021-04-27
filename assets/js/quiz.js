var body = document.body;
var score = 0;
var timeLeft = 60;
var question = 0;
var timerEl = document.getElementById('countdown');
var button = document.getElementById('button');
var quiz = document.getElementById('quiz');
var save = document.getElementById('save');
var timeUp = document.getElementById('timer')
var scoreList = document.getElementById('high-scores-list');
var initialsInput = document.querySelector('#initials');


// The array of questions for the game.
var questions = [
    { q: 'An array holds _____.', 
    a: [
        {text: 'functions', correct: false},
        {text: 'variables', correct: false}, 
        {text:'values', correct: true},
        {text: 'cars', correct: false},
    ]
    },

    { q: 'Which conditional statement executes many alternative blocks of code?', 
    a: [
        {text: 'if', correct: false},
        {text: 'else', correct: false}, 
        {text:'else if', correct: false},
        {text: 'switch', correct: true},
    ]
    },

    { q: 'The Math.floor() object rounds a number ______.', 
    a: [
        {text: 'up', correct: false},
        {text: 'down', correct: true}, 
        {text:'sideways', correct: false},
        {text: 'none of the above', correct: false},
    ]
},

    { q: 'A pseudo-class defines a _____ ____ of an element.', 
    a: [
        {text: 'time sensitivity', correct: false},
        {text: 'cloud app', correct: false}, 
        {text:'web api', correct: false},
        {text: 'special state', correct: true},
    ]
    },

    { q: 'JavaScript is the easiest programming language you will learn.', 
    a: [
        {text: 'yes', correct: true},
        {text: 'no', correct: true}, 
        {text:'maybe', correct: true},
        {text: 'ask me later', correct: true},
    ]
    },
]

// Start quiz button and start/countdown functions
button.addEventListener('click', startQuiz)

function startQuiz() {
    // executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // If statement for timer with greater than 1 sec remaining
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
          (timeLeft <= 0)
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        inputInitials()
        timer.textContent = 'Time is up!';
      }
    }, 1000);
    button.remove()
    quiz.style.display = 'block'
    showQuestion(question)
};

function showQuestion(currentQuestion) {
    var answer1 = document.getElementById('answer1');
    var answer2 = document.getElementById('answer2');
    var answer3 = document.getElementById('answer3');
    var answer4 = document.getElementById('answer4');

    var question = document.getElementById('question');
    question.textContent = questions[currentQuestion].q;

    answer1.textContent = questions[currentQuestion].a[0].text;
    answer1.value = questions[currentQuestion].a[0].correct;
    answer2.textContent = questions[currentQuestion].a[1].text;
    answer2.value = questions[currentQuestion].a[1].correct;    
    answer3.textContent = questions[currentQuestion].a[2].text;
    answer3.value = questions[currentQuestion].a[2].correct;    
    answer4.textContent = questions[currentQuestion].a[3].text;
    answer4.value = questions[currentQuestion].a[3].correct;

    answer1.addEventListener('click',checkAnswer)
    answer2.addEventListener('click',checkAnswer)
    answer3.addEventListener('click',checkAnswer)
    answer4.addEventListener('click',checkAnswer)
};

// Function to check answer and decrement time if incorrect
function checkAnswer(event) {
if (event.target.value === 'true') {
    question++  
    score++;
    return showQuestion(question)
}
else {
    return timeLeft -= 5;
}
};

// Function to show initials input and hide questions
function inputInitials() {
    document.querySelector(".initials-input").classList.remove("hide");
    document.querySelector(".container").classList.add("hide");
}

// Event to save initials in local storage
save.addEventListener('click',storeInitials)

// Ask for initials and show final score
function storeInitials(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value
    var data = JSON.parse(localStorage.getItem('initials')) || [];
    data.push([initials, score]);
    localStorage.setItem('initials',JSON.stringify(data));
    getScores()
}

// Function to get high scores and initials from local storage
function getScores() {
    document.querySelector(".initials-input").classList.add("hide");
    document.querySelector("#high-scores").classList.remove("hide");
    var ul = document.querySelector("#scoreTable");
    var data = JSON.parse(localStorage.getItem('initials')) || [];

    for (let index = 0; index < data.length; index++) {
    const element = data[index];
    ul.innerHTML += "<li>" + element[0] + ' ' + element[1] + "</li>"
    }
};
    document.getElementById("scoresLink").onclick = function() { 
        getScores();
};