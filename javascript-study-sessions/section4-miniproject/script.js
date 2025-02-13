const questions = [
    {question: "Is the Sky Blue?", correctAnswer: "Yes"},
    {question: "Does 5 + 10 = 14?", correctAnswer: "No"},
    {question: "Is Mel Mid a good pick?", correctAnswer: "No"},
    {question: "Garen Flash + R, high skill?", correctAnswer: "Yes"},
    {question: "Do we miss Twisted Treeline?", correctAnswer: "Yes"},
];

let currentQuestionIndex = 0;

let questionText = document.getElementById('question');
let resultText = document.getElementById('result');
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let restartButton = document.getElementById('restart');
restartButton.style.display = 'none';
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
    } else {
        questionText.textContent = `Quiz Complete! You scored ${score}/5`;
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        restartButton.style.display = 'block';
    }
}

function checkAnswer(answer) {
    if (questions[currentQuestionIndex].correctAnswer === answer) {
        resultText.textContent = "Correct!"
        score++;
    } else {
        resultText.textContent = "Incorrect!"
    }
    currentQuestionIndex++;
    setTimeout(() => {
        resultText.textContent = '';
        loadQuestion();
    }, 1000);
}
yesButton.addEventListener('click', () => checkAnswer("Yes"));
noButton.addEventListener('click', () => checkAnswer("No"));
restartButton.addEventListener('click', () => location.reload());

loadQuestion();
