# Persistent CLI To-Do List App

A simple, menu-driven command-line application built with Python.  
This app allows you to **add, view, and remove tasks**, with all tasks saved in a text file (`tasks.txt`) for persistence.

---

## 🚀 Features
- **View tasks**: Display all tasks stored in `tasks.txt`.
- **Add tasks**: Add new tasks to your list.
- **Remove tasks**: Delete tasks by their number.
- **Persistent storage**: Tasks remain saved in `tasks.txt` even after exiting the program.

---

## 🛠️ Requirements
- Python 3.14.2 (or any Python 3.x version)
- Runs in **IDLE**, VS Code, or terminal/command prompt.

---

## 📂 Setup
1. Save the script as `todo.py`.
2. Ensure the file `tasks.txt` is in the same folder (it will be created automatically if missing).
3. Run the program:
   - In IDLE: Press **F5**.
   - In terminal:
     ```bash
     python todo.py
     ```

---

## ▶️ Usage
When you run the program, you’ll see:
-- To-Do List Menu ---

View tasks

Add task

Remove task

Exit
Choose an option (1-4):

Code

### Example Flow
Choose an option (1-4): 2
Enter new task: Buy groceries
Task 'Buy groceries' added successfully!

Choose an option (1-4): 1
Your To-Do List:

Buy groceries

Code

---

## 📌 Outcome
- A **persistent CLI to-do app**: tasks are saved in `tasks.txt` and remain available across sessions.
- Simple, reproducible workflow suitable for demos, interviews, or practice projects.

---

## 📖 Notes
- `tasks.txt` acts as the storage file. You can open it in Notepad to confirm tasks are saved.
- Extendable: You can add features like **Edit task**, **Mark as done**, or **Search tasks**.

