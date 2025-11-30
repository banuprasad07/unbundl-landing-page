// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      // close mobile menu after click
      if (navMenu && menuBtn) {
        navMenu.classList.remove("show");
      }
    }
  });
});
