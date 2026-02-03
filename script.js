const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Open modal when thumbnail clicked
document.querySelectorAll(".thumbnail").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.textContent = img.alt;
    document.body.style.overflow = "hidden"; // prevent background scroll
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close when clicking outside image
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close with ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
