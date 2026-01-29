# 📝 To-Do List App

A simple, clean, and fully functional **to-do list application** built with **HTML, CSS, and JavaScript**.  
This app demonstrates core **CRUD operations** (Create, Read, Update, Delete) and clean DOM manipulation without page reloads.

---

## 🚀 Features
- **Add tasks** using the input field and button (or press Enter).
- **Mark tasks as completed** with a ✔ button (toggle line-through style).
- **Delete tasks** with a ✖ button.
- **Validation** prevents empty tasks from being added.
- **Dynamic rendering** using `createElement()` for safe DOM manipulation.
- **State management** with a JavaScript array to sync UI and logic.

---

## 📂 Project Structure
todo-app/
│
├── index.html            # HTML structure
├── style.css              # CSS styling
└── script.js              # JavaScript functionality

Code

---

## ⚙️ How It Works
1. **Create (Add)** → Enter a task and click Add.  
2. **Read (Render)** → Tasks are displayed dynamically in the list.  
3. **Update (Complete)** → Click ✔ to toggle task completion.  
4. **Delete (Remove)** → Click ✖ to delete a task.  

---

## 🖼️ UI Overview
- Input field + Add button at the top.
- Task list displayed below.
- Completed tasks appear with **line-through** and gray color.
- Delete button styled in **red** for clarity.

---

## 📖 Interview Questions (Concepts Covered)
- **What is CRUD and how is it applied here?**  
  - Create: Add tasks  
  - Read: Render tasks  
  - Update: Mark complete  
  - Delete: Remove tasks  

- **Why is event delegation important?**  
  - Efficient handling of events for dynamically added elements.  

- **Difference between innerHTML and createElement()?**  
  - `innerHTML`: Inserts raw HTML strings (less safe).  
  - `createElement()`: Creates DOM nodes programmatically (safer, structured).  

- **How do you manage state in JavaScript?**  
  - Using an array (`tasks`) to store and sync UI state.  

- **What are JavaScript event listeners?**  
  - Functions that respond to user actions (click, keypress, etc.).

---

## 🛠️ Technologies Used
- **HTML5** → Structure  
- **CSS3** → Styling  
- **JavaScript (ES6)** → Logic & DOM manipulation  

---

## 📌 How to Run
1. Clone or download this repository.  
2. Open the folder `todo-app`.  
3. Double-click `index.html` (or open it in a browser).  
4. Start adding tasks!  

---

## ✅ Deliverables
- Fully functional to-do list app with **add, delete, and complete features**.  
- Clean DOM manipulation without page reloads.  
- Professional folder structure and documentation.  

---

## 🌟 Future Enhancements
- Add **localStorage** support to persist tasks after page refresh.  
- Add **edit task** functionality.  
- Improve UI with animations and responsive design.  

---
