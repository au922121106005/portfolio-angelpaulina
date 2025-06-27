// Scroll-triggered section animations
const sections = document.querySelectorAll('.fade-slide-left, .fade-slide-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Aspiring Frontend Developer", "Passionate Learner 💻", "Creative Coder 💡"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newWordDelay = 2000; // Delay before typing next word

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingDelay + 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, 1000);
});
// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
