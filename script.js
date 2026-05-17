
// ================= DARK MODE =================
const toggleBtn =
    document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        toggleBtn.innerHTML =
            '<i class="fas fa-sun"></i>';
    } else {
        toggleBtn.innerHTML =
            '<i class="fas fa-moon"></i>';
    }
});

// ================= MOBILE MENU =================
const menuToggle =
    document.getElementById("menu-toggle");
const navLinks =
    document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML =
            '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';
    }
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a")
    .forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.innerHTML =
                '<i class="fas fa-bars"></i>';
        });
    });
// ================= TYPING EFFECT =================

const typingText =
    document.querySelector(".typing");
const words = [
    "Web Developer",
    "Frontend Developer",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeEffect() {
    const currentWord =
        words[wordIndex];
    if (isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex++);
    }
    if (!isDeleting &&
        charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    }
    else if (isDeleting &&
        charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex === words.length) {

            wordIndex = 0;
        }
        setTimeout(typeEffect, 300);
    }
    else {
        setTimeout(
            typeEffect,
            isDeleting ? 60 : 120
        );
    }
}

typeEffect();