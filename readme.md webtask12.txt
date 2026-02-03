# 📸 Image Gallery with Modal Popup

## 📂 Project Structure
image-gallery-modal/
│
├── index.html      → Gallery structure + hidden modal
├── style.css        → Grid layout, modal styling, overlay, animations
├── script.js        → Event listeners, dynamic updates, open/close logic
├── img1.jpg          → Mountain View
├── img2.jpg          → Beach Sunset
├── img3.jpg          → City Lights
└── img4.jpg          → Forest Path

Code

---

## 🚀 Setup Instructions
1. Download or clone this project folder.  
2. Place your images (`img1.jpg`, `img2.jpg`, `img3.jpg`, `img4.jpg`) inside the folder.  
3. Open the folder in **VS Code**.  
4. Install the **Live Server** extension.  
5. Right‑click `index.html` → **Open with Live Server**.  
6. The gallery will load at `http://127.0.0.1:5500/index.html`.  

---

## ✨ Features
- **Interactive Image Gallery**  
  - Thumbnails arranged in a responsive grid.  
  - Hover effect for better user experience.  

- **Smooth Modal Popup Experience**  
  - Enlarged image with caption.  
  - Background overlay to focus attention.  
  - Prevents background scrolling when modal is open.  
  - Close modal via button, outside click, or ESC key.  
  - Fade‑in and zoom‑in animations.  

- **Accessibility**  
  - Captions from `alt` attributes.  
  - Keyboard support (ESC key).  
  - `role="dialog"` and `aria-modal="true"` for screen readers.  

---

## 🧑‍💻 Interview Questions & Answers

| Question | Answer |
|----------|--------|
| **What is a modal?** | A modal is a UI element that appears on top of the main content, requiring user interaction before returning to the underlying page. |
| **How do you prevent background interaction?** | By adding a semi‑transparent overlay and disabling background scrolling (`body.style.overflow = "hidden"`). |
| **Why use event listeners?** | They allow dynamic, reusable behavior to respond to user actions like clicks or key presses. |
| **What is z-index?** | It controls the stacking order of elements. A higher value ensures the modal appears above other content. |
| **How to improve accessibility in modals?** | Use semantic HTML, meaningful `alt` text, keyboard navigation (ESC key), and ARIA attributes (`role="dialog"`, `aria-modal="true"`). |

---

## ✅ Deliverables
- **Interactive image gallery** → Thumbnails arranged in a grid, clickable.  
- **Smooth modal popup experience** → Enlarged image with overlay, animations, scroll lock, ESC key support.  

---

## 📷 Screenshots (Optional)
You can add screenshots of:  
- The gallery grid view.  
- The modal popup with enlarged image.  

---

## 📌 Notes
- Works in all modern browsers.  
- Fully responsive layout.  
- Easy to extend with more images.  