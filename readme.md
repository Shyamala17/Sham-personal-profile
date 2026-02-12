# Mini Vanilla JavaScript SPA

A simple **Single-Page Application (SPA)** built using **Vanilla JavaScript**.  
This project demonstrates dynamic view rendering, routing, and browser history handling without page reloads.

---

## 📂 Project Structure
mini-spa/
│── index.html   # HTML shell with navigation and content container
│── style.css    # Basic styling for navigation and layout
│── app.js       # Routing logic and view rendering

---

## 🚀 Features
- **Dynamic Views**: Home, About, Contact (rendered via JavaScript functions).
- **Navigation Without Reloads**: Prevents default link behavior.
- **History API**: Uses `pushState` and `popstate` for clean URLs and back/forward support.
- **Loading Indicator**: Simulates async view switching.
- **404 Handling**: Displays a friendly error page for unknown routes.
- **Modular Code**: Separation of views, routes, and router logic.

---

## 🛠 Setup & Usage

### 1. Clone or Create Folder
Create a folder called `mini-spa` in VS Code and add the three files (`index.html`, `style.css`, `app.js`).

### 2. Run Locally
Open `index.html` in your browser.  
⚠️ For proper routing, use a local server (recommended):

- Install the **Live Server** extension in VS Code.
- Right-click `index.html` → **Open with Live Server**.
- Navigate between `/`, `/about`, `/contact`.

### 3. Test Functionality
- Click links → content updates without reload.
- Refresh → correct view loads.
- Use back/forward buttons → state remains consistent.
- Invalid URL → shows **404 Not Found**.

---

## 📖 Example Views
- **Home**: Welcome message.
- **About**: Project description.
- **Contact**: Example contact info.

---

## ✅ Deliverables
- Fully functional mini SPA without page reloads.
- Clean routing and state handling using Vanilla JS.
- Easy to extend with new views or API integrations.

---

## 🔮 Next Steps (Optional Enhancements)
- Add a demo API fetch view (e.g., load JSON data).
- Modularize into separate files (`views.js`, `router.js`).
- Improve styling with responsive design.

---

### Author
Built with ❤️ using **Vanilla JavaScript**.
