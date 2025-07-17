let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim Berners-Lee",
        "answer_3": "Bill Gates",
        "answer_4": "Patty",
        "right_answer": 2
    },
    {
        "question": "Was ist CSS?",
        "answer_1": "Ein Programmiercode",
        "answer_2": "Ein Stylingcode",
        "answer_3": "Ein Spiel",
        "answer_4": "Ein Computer",
        "right_answer": 2
    },
    {
        "question": "Was ist JavaScript?",
        "answer_1": "Eine Programmiersprache",
        "answer_2": "Ein Stylingcode",
        "answer_3": "Ein Spiel",
        "answer_4": "Ein Computer",
        "right_answer": 1
    },
    {
        "question": "Was ist ein Array?",
        "answer_1": "Ein Programmiercode",
        "answer_2": "Eine Sammlung von Werten",
        "answer_3": "Ein Spiel",
        "answer_4": "Ein Computer",
        "right_answer": 2
    },
    {
        "question": "Was ist ein Objekt in JavaScript?",
        "answer_1": "Ein Programmiercode",
        "answer_2": "Eine Sammlung von Eigenschaften und Methoden",
        "answer_3": "Ein Spiel",
        "answer_4": "Ein Computer",
        "right_answer": 2
    },
    {
        "question": "Was ist eine Variable?",
        "answer_1": "Ein fester Wert",
        "answer_2": "Ein Speicherort für Daten",
        "answer_3": "Ein Spiel",
        "answer_4": "Ein Computer",
        "right_answer": 2
    },
    {
        "question": "Womit kannst du Elemente in CSS auswählen?",
        "answer_1": "Mit JavaScript",
        "answer_2": "Mit Selectoren",
        "answer_3": "Mit HTML-Tags",
        "answer_4": "Mit IDs nur",
        "right_answer": 2
    },
    {
        "question": "Wie bindet man JavaScript in HTML ein?",
        "answer_1": "Mit dem <style> Tag",
        "answer_2": "Mit dem <script> Tag",
        "answer_3": "Mit dem <js> Tag",
        "answer_4": "Mit dem <link> Tag",
        "right_answer": 2
    },
    {
        "question": "Wie kannst du ein Element per ID mit JavaScript auswählen?",
        "answer_1": "document.querySelector('#id')",
        "answer_2": "getElementByClass('id')",
        "answer_3": "getElementById('#id')",
        "answer_4": "select('#id')",
        "right_answer": 1
    },
    {
        "question": "Welche CSS-Einheit ist relativ zur Schriftgröße des Elternelements?",
        "answer_1": "px",
        "answer_2": "vh",
        "answer_3": "em",
        "answer_4": "rem",
        "right_answer": 3
    },
    {
        "question": "Was macht 'addEventListener' in JavaScript?",
        "answer_1": "Es fügt einen HTML-Block hinzu",
        "answer_2": "Es verändert das CSS",
        "answer_3": "Es reagiert auf Benutzeraktionen",
        "answer_4": "Es lädt eine neue Seite",
        "right_answer": 3
    },
    {
        "question": "Was ist der Unterschied zwischen '==' und '===' in JavaScript?",
        "answer_1": "Keiner, sie sind gleich",
        "answer_2": "'===' vergleicht zusätzlich den Datentyp",
        "answer_3": "'==' ist nur für Strings",
        "answer_4": "'===' ist nur für Zahlen",
        "right_answer": 2
    },
    {
        "question": "Was macht die CSS-Eigenschaft 'position: absolute;'?",
        "answer_1": "Das Element wird aus dem Dokumentfluss entfernt",
        "answer_2": "Das Element wird unsichtbar",
        "answer_3": "Das Element wird mittig gesetzt",
        "answer_4": "Das Element wird fixiert am Bildschirmrand",
        "right_answer": 1
    },
    {
        "question": "Wie deklarierst du eine Funktion in JavaScript?",
        "answer_1": "create function() {}",
        "answer_2": "make function() {}",
        "answer_3": "function name() {}",
        "answer_4": "def name() {}",
        "right_answer": 3
    },
    {
        "question": "Wie kannst du mit JavaScript ein neues HTML-Element erstellen?",
        "answer_1": "document.createElement('div')",
        "answer_2": "new HTMLElement('div')",
        "answer_3": "HTML.create('div')",
        "answer_4": "create.html('div')",
        "right_answer": 1
    }
];



let currentQuestion = 0;
let rightQuestions = 0;
let progress = 0;
let audio_success = new Audio('./sounds/winner.mp3');
let audio_wrong = new Audio('./sounds/looser.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('all-questions2').innerHTML = questions.length;
    showQuestion();
    showAnswer();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
}

function showAnswer() {
    let question = questions[currentQuestion];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('current-Question').innerHTML = currentQuestion + 1;

}

function answer(selection) {
    let question = questions[currentQuestion];
    let rightAnswer = question['right_answer'];

    if (selection == rightAnswer) {
        rightQuestions++;
        document.getElementById('answer_' + selection).parentNode.classList.add('bg-success');
        audio_success.play();

    } else {
        document.getElementById('answer_' + selection).parentNode.classList.add('bg-danger');
        document.getElementById('answer_' + rightAnswer).parentNode.classList.add('bg-success');
        audio_wrong.play();
    }
    document.getElementById('nextButton').disabled = false;



}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        resetAnswers();
        showQuestion();
        showAnswer();
        document.getElementById('nextButton').disabled = true;
        progress = (currentQuestion + 1) / questions.length;
        progress = Math.round(progress * 100);
        document.getElementById('progressBar').innerHTML = `${progress} %`
        document.getElementById('progressBar').style.width = `${progress}%`
    } else {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';
        document.getElementById('rightQuestions').innerHTML = rightQuestions;
        if (rightQuestions == questions.length) {
            document.getElementById('endScreenText').innerHTML = 'Wow, du hast ja alle Fragen richtig beantwortet! Sei Stolz!';
         
        }
    }
}

function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success', 'bg-danger');
}

function startQuiz() {
    document.getElementById('quizContainerStart').style = 'display: none;';
    document.getElementById('questionBody').style = '';
    init();
}

function resetQuiz() {
    currentQuestion = 0;
    rightQuestions = 0;
    progress = 0;
    document.getElementById('progressBar').innerHTML = '0%';
    document.getElementById('progressBar').style.width = '0%'; 
    document.getElementById('quizContainerStart').style = 'display: none;';
    document.getElementById('questionBody').style = '';
    init();
    resetAnswers();
    document.getElementById('nextButton').disabled = true;
    document.getElementById('endScreen').style = 'display: none;';
}