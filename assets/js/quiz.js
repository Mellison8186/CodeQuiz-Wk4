var body = document.body;
var timerEl = document.getElementById('countdown');
var button = document.getElementById('button');
var score = 0;
var quiz = document.getElementById('quiz');
var timeLeft = 30;
var question = 0;
// var message = 'Your score is';

var h3ScoreEl = document.createElement('h3Score');
h3ScoreEl.textContent = 'View High Scores';
h3ScoreEl.setAttribute('style', 'margin:auto; width:75%; text-align:left;');
body.appendChild(h3ScoreEl);

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

// Start quiz button and start and countdown functions
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
        timerEl.textContent = 'Time is up!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
    button.remove()
    quiz.style.display = 'block'
    showQuestion(question)
}

function showQuestion(currentQuestion) {
    var answer1 = document.getElementById('answer1');
    var answer2 = document.getElementById('answer2');
    var answer3 = document.getElementById('answer3');
    var answer4 = document.getElementById('answer4');

    var question = document.getElementById('question')
    question.textContent = questions[currentQuestion].q;

console.log(currentQuestion)

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
}

function checkAnswer(event) {
if (event.target.value === 'true') {
    question ++;
    return showQuestion(question)
}
else {
    return timeLeft -= 5;
}
}