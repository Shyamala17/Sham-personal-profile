# 🌍 Country Info Finder

A simple **API-driven web page** that fetches and displays dynamic data from the [REST Countries API](https://restcountries.com/).  
Users can enter a country name, click a button, and instantly see details such as capital, region, population, and flag.

---

## 📂 Project Structure
country-info-app/
│
├── index.html    # Main web page structure
├── style.css     # Optional styling for polished UI
└── script.js     # JavaScript logic (Fetch API, DOM updates, error handling)

---

## 🚀 Features
- **Fetch API Integration** → Retrieves live data from REST Countries API.  
- **Dynamic Rendering** → Displays country details without reloading the page.  
- **Error Handling** → Gracefully handles invalid input or network failures.  
- **Loading Indicator** → Shows "Loading..." while data is being fetched.  
- **Responsive UI** → Clean and simple design with optional CSS styling.  

---

## 🖥️ How to Run
1. Clone or download this repository.  
2. Open the project folder in **VS Code** or any editor.  
3. Launch `index.html` in your browser.  
4. Enter a country name (e.g., `India`, `France`, `Japan`) and click **Get Info**.  
5. The page will dynamically render country details from the API.  

---

## 🧪 Testing Network Failure
1. Open **DevTools** (`F12` → Network tab).  
2. Set **Throttling** → **Offline**.  
3. Click **Get Info** → You’ll see the error message:  
Error fetching data: Failed to fetch

Code


Copy
4. Switch back to **Online** → Try again → Data loads normally.  

---

## 📜 Code Highlights
- **index.html** → Input field, button, result section, and script reference.  
- **script.js** →  
- Uses `fetch()` to call API.  
- Converts response to JSON.  
- Extracts fields (`name`, `capital`, `region`, `population`, `flag`).  
- Updates DOM dynamically.  
- Implements `.catch()` for error handling.  
- Uses `.finally()` to hide loading indicator.  
- **style.css** → Optional styling for better presentation.  

---

## ✅ Deliverables
- **Working API-driven web page** (`index.html`)  
- **Dynamic data rendering from external source** (`script.js`)  
- **Optional polished styling** (`style.css`)  

---

## 📌 Example Output
For input: `India`  
India
Capital: New Delhi
Region: Asia
Population: 1,417,173,173
Flag: [Image of flag]



## 📖 Notes
- This project demonstrates **asynchronous programming** with Fetch API.  
- Can be extended to other APIs (Weather, Quotes, etc.).  
- Works locally without authentication. 