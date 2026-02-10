// --- Tab Switching ---
const tabLogin = document.getElementById("tab-login");
const tabRegister = document.getElementById("tab-register");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

tabLogin.onclick = () => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  tabLogin.classList.add("active");
  tabRegister.classList.remove("active");
  message.innerText = "";
};

tabRegister.onclick = () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  tabRegister.classList.add("active");
  tabLogin.classList.remove("active");
  message.innerText = "";
};

// --- Registration ---
registerForm.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("regUsername").value;
  const pass = document.getElementById("regPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[user]) {
    message.innerText = "⚠️ Username already exists!";
  } else {
    users[user] = pass;
    localStorage.setItem("users", JSON.stringify(users));
    message.innerText = "🎉 Registered successfully!";
  }
});

// --- Login ---
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const user = document.getElementById("loginUsername").value;
  const pass = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[user] && users[user] === pass) {
    localStorage.setItem("sessionUser", user);
    redirectToProtected(user);
  } else {
    message.innerText = "❌ Invalid credentials!";
  }
});

// --- Redirect to Protected Page ---
function redirectToProtected(user) {
  document.body.innerHTML = `
    <div class="auth-card">
      <h2>Welcome, ${user} 🌟</h2>
      <p>You are now logged in to the protected page.</p>
      <button id="logoutBtn" class="submit">Logout</button>
    </div>`;
  document.getElementById("logoutBtn").onclick = () => {
    localStorage.removeItem("sessionUser");
    location.reload();
  };
}

// --- Auto-login Check ---
window.onload = () => {
  const sessionUser = localStorage.getItem("sessionUser");
  if (sessionUser) {
    redirectToProtected(sessionUser);
  }
};

// --- Note ---
// This is FRONTEND-ONLY authentication using LocalStorage.
// Do NOT use this method in production. Real apps require secure backend authentication.

