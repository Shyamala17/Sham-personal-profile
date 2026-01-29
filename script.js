// Get form and input elements
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Utility functions
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error");
  errorDisplay.textContent = message;
  input.classList.add("invalid");
  input.classList.remove("success");
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error");
  errorDisplay.textContent = "";
  input.classList.add("success");
  input.classList.remove("invalid");
}

// Reusable validation function
function validateField(input, condition, errorMessage) {
  if (!condition) {
    showError(input, errorMessage);
    return false;
  }
  showSuccess(input);
  return true;
}

// Individual validations
function validateName() {
  return validateField(nameInput, nameInput.value.trim() !== "", "Name is required");
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validateField(emailInput, regex.test(emailInput.value.trim()), "Enter a valid email address");
}

function validatePassword() {
  const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  return validateField(passwordInput, regex.test(passwordInput.value), "Password must be 6+ chars, include uppercase & number");
}

function validateConfirmPassword() {
  return validateField(confirmPasswordInput, confirmPasswordInput.value === passwordInput.value, "Passwords do not match");
}

// Real-time validation (blur + keyup)
[nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
  input.addEventListener("blur", () => {
    switch (input.id) {
      case "name": validateName(); break;
      case "email": validateEmail(); break;
      case "password": validatePassword(); break;
      case "confirmPassword": validateConfirmPassword(); break;
    }
  });

  input.addEventListener("keyup", () => {
    switch (input.id) {
      case "name": validateName(); break;
      case "email": validateEmail(); break;
      case "password": validatePassword(); break;
      case "confirmPassword": validateConfirmPassword(); break;
    }
  });
});

// Prevent form submission until all validations pass
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const isValid =
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword();

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    document.querySelectorAll("input").forEach(input => {
      input.classList.remove("success");
    });
  }
});
