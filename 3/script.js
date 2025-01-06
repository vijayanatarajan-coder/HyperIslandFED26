const form = document.querySelector("form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const options = document.querySelector("#options");
const ageRadios = document.querySelectorAll("input[name='radioGroup']");

const client = JSON.parse(localStorage.getItem("client")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  if (validateInputsAndAddUser()) {
    displayWelcomeMessage(username.value);
    form.reset(); // Clear the form after submission
  }
});

function saveUsersToLocalStorage() {
  localStorage.setItem("client", JSON.stringify(client));
}

function validateInputsAndAddUser() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const messageVal = message.value.trim();
  const genderVal = options.value.trim();
  const ageVal = getSelectedAge();

  let success = true;

  // Validate Username
  if (usernameVal === "") {
    success = false;
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  // Validate Email
  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }

  // Validate Phone Number
  if (phoneVal === "") {
    success = false;
    setError(phone, "Phone number is required");
  } else if (!validatePhoneNumber(phoneVal)) {
    success = false;
    setError(phone, "Please enter a valid phone number");
  } else {
    setSuccess(phone);
  }

  // Validate Message
  if (messageVal === "") {
    success = false;
    setError(message, "Message is required");
  } else if (messageVal.length < 50) {
    success = false;
    setError(message, "Message must be at least 50 characters long");
  } else {
    setSuccess(message);
  }

  // Validate Gender
  if (genderVal === "") {
    success = false;
    setError(options, "Please select a gender");
  } else {
    setSuccess(options);
  }

  // Validate Age
  if (!ageVal) {
    success = false;
    setError(
      document.querySelector("input[name='radioGroup']"),
      "Please select an age group"
    );
  } else {
    setSuccess(document.querySelector("input[name='radioGroup']"));
  }

  if (success) {
    const newClient = {
      username: usernameVal,
      email: emailVal,
      phone: phoneVal,
      message: messageVal,
      gender: genderVal,
      age: ageVal,
    };

    client.push(newClient);
    saveUsersToLocalStorage();
  }

  return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = ""; // Corrected typo from "innertext"
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function validatePhoneNumber(phone) {
  const phonePattern = /^\d{10}$/; // Assumes a 10-digit phone number format
  return phonePattern.test(phone);
}

function getSelectedAge() {
  let selectedAge = null;
  ageRadios.forEach((radio) => {
    if (radio.checked) {
      selectedAge = radio.value;
    }
  });
  return selectedAge;
}

function displayWelcomeMessage(name) {
  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = `Welcome, ${name}!`;
  welcomeMessage.style.display = "block";
}
