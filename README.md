# REST API Data Dashboard

## Overview
An interactive dashboard built with **HTML, CSS, and JavaScript (Fetch API)** that consumes a public REST API and displays product data with filtering, sorting, and pagination.

## Tools
- Primary: VS Code, Fetch API, JavaScript
- Alternatives: Axios (via CDN), CodePen

## Features
- Fetches live product data from [Fake Store API](https://fakestoreapi.com/)
- Displays products in a responsive grid
- Filtering by search input
- Sorting by price (ascending/descending)
- Pagination via "Load More" button
- Error handling with user-friendly messages
- Optimized DOM updates for performance

## API Endpoints
- `GET https://fakestoreapi.com/products` → Returns product list in JSON

## Data Flow
API → Fetch → JSON → JavaScript Array → Rendered UI Components

## How to Run
1. Clone/download this repo.
2. Open in **VS Code**.
3. Install **Live Server extension**.
4. Right-click `index.html` → **Open with Live Server**.
5. Dashboard loads in browser with live API data.

## Deliverables
- Interactive data dashboard consuming REST API
- Real-world data handling and visualization logic
