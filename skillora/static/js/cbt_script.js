let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const questionNo = document.getElementById("questionNo");
const palette = document.getElementById("palette");

function loadQuestion(index) {

    const q = questions[index];

    questionNo.innerHTML = `Question ${index + 1} of ${questions.length}`;

    questionText.innerHTML = q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, i) => {

        optionsContainer.innerHTML += `
            <div class="form-check mb-3">
                <input class="form-check-input"
                       type="radio"
                       name="option"
                       value="${i}"
                       ${answers[index] == i ? "checked" : ""}>

                <label class="form-check-label">
                    ${option}
                </label>
            </div>
        `;
    });

    updatePalette();
}

function saveAnswer() {

    const selected = document.querySelector(
        'input[name="option"]:checked'
    );

    if (selected) {
        answers[currentQuestion] = parseInt(selected.value);
    }
}

function saveNext() {

    saveAnswer();

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function previousQuestion() {

    saveAnswer();

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function clearResponse() {

    answers[currentQuestion] = null;
    loadQuestion(currentQuestion);
}

function createPalette() {

    for (let i = 0; i < questions.length; i++) {

        let btn = document.createElement("button");

        btn.innerText = i + 1;
        btn.className = "btn btn-outline-primary m-1";

        btn.onclick = function () {
            saveAnswer();
            currentQuestion = i;
            loadQuestion(i);
        };

        palette.appendChild(btn);
    }
}

function updatePalette() {

    const buttons = palette.querySelectorAll("button");

    buttons.forEach((btn, i) => {

        btn.classList.remove(
            "btn-success",
            "btn-outline-primary"
        );

        if (answers[i] !== null) {
            btn.classList.add("btn-success");
        } else {
            btn.classList.add("btn-outline-primary");
        }
    });
}

function submitTest() {

    // Timer stop
    clearInterval(timer);

    // Test hide
    document.getElementById("testContainer").style.display = "none";

    saveAnswer();

    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach((q, i) => {

        if (answers[i] === null) {
            skipped++;
        }
        else if (answers[i] === q.answer) {
            correct++;
        }
        else {
            wrong++;
        }
    });

    let percentage =
        ((correct / questions.length) * 100).toFixed(2);

    document.getElementById(
        "correctCount"
    ).innerText = correct;

    document.getElementById(
        "wrongCount"
    ).innerText = wrong;

    document.getElementById(
        "skipCount"
    ).innerText = skipped;

    document.getElementById(
        "percentage"
    ).innerText = percentage + "%";

    document.getElementById(
        "scoreText"
    ).innerText =
        `Score: ${correct}/${questions.length}`;

    document.getElementById(
        "scoreCircle"
    ).innerText = percentage + "%";

    let modal = new bootstrap.Modal(
        document.getElementById("resultModal")
    );



    let reviewHTML = "";

questions.forEach((q, i) => {

    let userAnswer = answers[i];

    let userText =
        userAnswer !== null
        ? q.options[userAnswer]
        : "Not Attempted";

    let correctText =
        q.options[q.answer];

    let isCorrect =
        userAnswer === q.answer;

    reviewHTML += `
        <div class="review-card ${isCorrect ? '' : 'review-wrong'}">

            <h6>
                Q${i+1}. ${q.question}
            </h6>

            <p>
                <strong>Your Answer:</strong>
                ${userText}
                ${isCorrect ? '✅' : '❌'}
            </p>

            <p>
                <strong>Correct Answer:</strong>
                ${correctText} ✅
            </p>

        </div>
    `;
});

document.getElementById("reviewSection").innerHTML = reviewHTML;

    modal.show();
}

createPalette();
loadQuestion(0);


// 60 Minutes Timer
let timeLeft = 60 * 60; // 3600 seconds
let timer;   // Global timer variable

function startTimer() {

    timer = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timer").innerText =
            minutes + ":" + seconds;

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timer);

            alert("Time Over! Test Submitted.");

            submitTest();
        }

    }, 1000);
}

startTimer();