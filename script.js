let products = [];
let displayedCount = 0;
const PAGE_SIZE = 6;

async function loadData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("API error: " + response.status);
    products = await response.json();
    renderDashboard(products.slice(0, PAGE_SIZE));
    displayedCount = PAGE_SIZE;
  } catch (error) {
    showError(error.message);
  }
}

function renderDashboard(data) {
  const container = document.getElementById("dashboard");
  container.innerHTML = data.map(p => `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.category}</p>
      <p>$${p.price}</p>
    </div>
  `).join("");
}

function sortByPrice(ascending) {
  const sorted = [...products].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
  renderDashboard(sorted.slice(0, displayedCount));
}

function applyFilters() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(query));
  renderDashboard(filtered.slice(0, displayedCount));
}

function loadMore() {
  displayedCount += PAGE_SIZE;
  renderDashboard(products.slice(0, displayedCount));
}

function showError(message) {
  document.getElementById("error").textContent = "⚠️ " + message;
}

loadData();
