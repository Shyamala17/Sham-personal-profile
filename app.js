// Views as template strings
const Home = () => `
  <h1>Home</h1>
  <p>Welcome to our Mini SPA built with Vanilla JS!</p>
`;

const About = () => `
  <h1>About</h1>
  <p>This is a simple single-page application without page reloads.</p>
`;

const Contact = () => `
  <h1>Contact</h1>
  <p>Get in touch via email: example@domain.com</p>
`;

const NotFound = () => `
  <h1>404 - Not Found</h1>
  <p>Sorry, the page you are looking for does not exist.</p>
`;

// Routes map
const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
};

// Router function
function router() {
  const path = window.location.pathname;
  const view = routes[path] || NotFound;

  // Simulate loading indicator
  const app = document.getElementById("app");
  app.innerHTML = "<p>Loading...</p>";

  setTimeout(() => {
    app.innerHTML = view();
  }, 300); // fake delay
}

// Navigation handler
function navigate(event) {
  event.preventDefault();
  const url = event.target.href;
  window.history.pushState(null, null, url);
  router();
}

// Attach listeners
document.querySelectorAll("[data-link]").forEach(link => {
  link.addEventListener("click", navigate);
});

// Handle browser back/forward
window.addEventListener("popstate", router);

// Initial load
document.addEventListener("DOMContentLoaded", router);
