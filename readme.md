# LOGIN-PROJECT

A **frontend-only login and registration system** built with HTML, CSS, and JavaScript.  
This project demonstrates the **basics of authentication flow** using LocalStorage.  
⚠️ Note: This is for demo/learning purposes only. Do not use LocalStorage for real authentication in production.

---

## 🚀 Features
- **Registration**: Create new users and store credentials in LocalStorage.
- **Login**: Validate credentials against stored values.
- **Session Handling**: Simulated session using LocalStorage (`sessionUser`).
- **Protected Page**: Accessible only after login.
- **Logout**: Clears session and restricts access again.
- **Dynamic Feedback**: Success/error messages with emojis.
- **Creative UI**: Gradient background, card layout, tabbed forms.

---

## 📂 Project Structure
LOGIN-PROJECT/
│── index.html        # Main entry point
│── css/
│    └── style.css    # Styling (colors, layout, animations)
│── js/
│    └── script.js    # Authentication logic
│── assets/
│    ├── images/      # Optional images/icons



---

## 🖥️ How to Run
1. Open the project in **Visual Studio Code**.
2. Right-click on `index.html` → **Open with Live Server** (recommended).
   - Or simply double-click `index.html` to open in your browser.
3. Interact with the UI:
   - Register a new user.
   - Login with the same credentials.
   - Access the protected page.
   - Logout to clear session.

---

## 🎬 Demo Flow
1. **Register** → Enter username & password → stored in LocalStorage.
2. **Login** → Validate credentials → success message + protected page.
3. **Protected Page** → Shows personalized welcome message.
4. **Logout** → Clears session → back to login/register UI.
5. **Auto-login** → Refresh page → still logged in until logout.

---

## ⚠️ Important Note
This project uses **LocalStorage** for demo purposes.  
In real applications:
- Use a **backend server** for authentication.
- Store passwords securely (hashed + salted).
- Use **tokens/sessions** for access control.

---

## 📚 Deliverables
- **Functional frontend login system**.
- **Understanding of authentication flow basics**:
  - Registration
  - Validation
  - Session handling
  - Restricted access
  - Logout

│    └── fonts/       # Optional custom fonts