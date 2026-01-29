Registration Form Project
📌 Overview
This project demonstrates a robust client-side validated registration form built using HTML, CSS, and JavaScript. It ensures clear error handling, user feedback, and a professional structure suitable for learning and demonstration.

🚀 Features
Form Fields: Name, Email, Password, Confirm Password

Disabled Default Validation: Uses novalidate to bypass browser defaults

Custom Validation:

Name → required (non-empty)

Email → regex validation for proper format

Password → regex validation for strength (≥6 chars, one uppercase, one number)

Confirm Password → must match Password

Reusable Functions: validateField() reduces repeated code

Real-Time Validation: Runs on blur and keyup events

Error Handling:

Inline error messages below inputs

Red borders for invalid inputs

Green borders for valid inputs

Submission Control:

Prevents submission until all validations pass

Displays success alert and resets form on valid submission

📂 Project Structure
registration-form/
├── index.html   # Form structure
├── style.css    # Styling (error/success states)
└── script.js    # Validation logic
🖥️ How to Run
Clone the repository:

git clone https://github.com/your-username/registration-form.git
Open the project folder in VS Code or any editor.

Run index.html in your browser (double-click or use Live Server).

Test inputs to see validation in action.
✅ Deliverables

Robust client-side validated form

Clear error handling and user feedback

Real-time validation for better user experience

Professional project structure with reusable code

🧪 Test Plan
Input Case

Expected Output

Empty Name

Red border + "Name is required"

Invalid Email (abc@com)

Red border + "Enter a valid email address"

Weak Password (12345)

Red border + "Password must be 6+ chars..."

Mismatched Confirm Password

Red border + "Passwords do not match"

All Valid Inputs

Green borders + Success alert + Form reset

🎯 Learning Outcomes
Mastery of form validation using JavaScript

Understanding of regex for input validation

Experience with dynamic DOM manipulation

Professional project documentation and GitHub presentation.