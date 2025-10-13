// Responsive navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("show");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }
});

