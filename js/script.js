// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("show");

    const spans = menuBtn.querySelectorAll("span");
    if (menuBtn.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translate(4px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(4px, -5px)";
    } else {
      spans.forEach((span) => {
        span.style.transform = "";
        span.style.opacity = "1";
      });
    }
  });
}

// Smooth scroll for internal nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile menu after click
      if (navMenu && menuBtn) {
        navMenu.classList.remove("show");
        menuBtn.classList.remove("open");
        menuBtn.querySelectorAll("span").forEach((span) => {
          span.style.transform = "";
          span.style.opacity = "1";
        });
      }
    }
  });
});

