# Simple CLI Calculator

A command-line calculator built in Python 3.14.2.  
Supports basic operations: addition, subtraction, multiplication, and division.  
Loops until the user chooses to exit.

---

## 📂 Project Structure

calculator/
└── calculator.py

---

## 🧩 Code Schema

- **Function Definitions**
  - `add(x, y)` → returns sum
  - `subtract(x, y)` → returns difference
  - `multiply(x, y)` → returns product
  - `divide(x, y)` → returns quotient or error message

- **Main Function (`main`)**
  - Prints welcome banner and instructions
  - Loops until user types `exit`
  - Prompts for operation (+, -, *, /)
  - Validates input
  - Prompts for two numbers
  - Calls the correct function
  - Prints the result

- **Program Entry Point**
  - `if __name__ == "__main__": main()`

---

## ⚙️ How to Run

1. Clone or download the project folder.
2. Open terminal in the project directory.
3. Run the script:
   ```bash
   python calculator.py
=== Simple CLI Calculator ===
Operations: +, -, *, /
Type 'exit' to quit.

Enter operation (+, -, *, /) or 'exit': +
Enter first number: 10
Enter second number: 5
Result: 15.0

Enter operation (+, -, *, /) or 'exit': /
Enter first number: 8
Enter second number: 0
Result: Error: Division by zero!

Enter operation (+, -, *, /) or 'exit': exit
Goodbye!
