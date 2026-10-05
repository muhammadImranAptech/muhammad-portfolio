const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");
const cursorGlow = document.getElementById("cursorGlow");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// Demo contact form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  formMessage.textContent = `Thanks ${name || "there"}! Your project request is ready. Connect the form to PHP/backend to receive real messages.`;

  form.reset();
});

// Dynamic footer year
year.textContent = new Date().getFullYear();

// Small pointer glow on desktop
window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
