let questions = null;
const quizContainer = document.querySelector("#quiz-container");
let questionNumber = 0;
let correct_answer = "";
let score = 0;

// Fetch questions from the API
async function fetchQuestions() {
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    questions = data.results;
    console.log(questions);
    displayQuestion();
  } catch (error) {
    return console.error("Error fetching data:", error);
  }
}

// Display the current question and options
function displayQuestion() {
  if (questions && questionNumber < questions.length) {
    let element = questions[questionNumber];
    console.log(element);
    // Clear any existing content
    quizContainer.innerHTML = "";

    // Create a question element
    const questionText = document.createElement("div");
    questionText.classList.add("question");
    questionText.innerHTML = `<strong>${element.question}</strong>`;
    quizContainer.appendChild(questionText);

    let allAnswers = [...element.incorrect_answers];
    allAnswers.push(element.correct_answer);
    correct_answer = element.correct_answer;

    // Shuffle answers
    allAnswers = allAnswers.sort(() => Math.random() - 0.5);

    // Loop through the list and create radio buttons
    allAnswers.forEach((answer) => {
      // Create radio button input
      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("options");
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.id = answer;
      radioButton.name = "answer";
      radioButton.value = answer;

      // Create label for the radio button
      const label = document.createElement("label");
      label.setAttribute("for", answer);
      label.textContent = answer;

      // Append radio button and label to the container
      optionsContainer.appendChild(radioButton);
      optionsContainer.appendChild(label);
      quizContainer.appendChild(optionsContainer);
      // Add line break for each option
      quizContainer.appendChild(document.createElement("br"));
    });
  } else {
    // If there are no more questions
    quizContainer.innerHTML = `<h2>Quiz Finished! Your score is: ${score} out of ${questions.length}</h2>`;
  }
}

// Function to handle form submission and check the answer
function submitSelection() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    // Display the selected answer
    document.getElementById("selectedAnswer").textContent =
      "You selected: " + selectedOption.value;

    // Check if the selected answer is correct
    if (selectedOption.value === correct_answer) {
      score++;
    }

    // Update the score display
    document.getElementById("score").textContent = `Score: ${score}`;

    // Move to the next question
    questionNumber++;

    // Wait a bit before displaying the next question
    setTimeout(() => {
      displayQuestion();
    }, 1000);
  } else {
    // If no option is selected, display an alert
    document.getElementById("selectedAnswer").textContent =
      "Please select an answer!";
  }
}

function restartQuiz() {
  // Reset variables
  questionNumber = 0;
  score = 0;
  correct_answer = "";
  document.getElementById("selectedAnswer").textContent = "";
  document.getElementById("score").textContent = "";

  // Fetch new questions and start over
  fetchQuestions();
}

// Initial fetch and start quiz when the page loads
fetchQuestions();
