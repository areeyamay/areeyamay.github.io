// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ✅ ปิดเมนูเมื่อกดลิงก์
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


// Hero Fade-in Smooth
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.add("show"); // ไม่ต้อง setTimeout แล้ว
  }
});

// Scroll Reveal Effect
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Active Menu Highlight (Scrollspy)
const menuLinks = document.querySelectorAll('.navbar nav a');
const sections = document.querySelectorAll('section');
function setActiveMenu() {
  let scrollPos = window.scrollY + window.innerHeight / 2;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollPos >= top && scrollPos < top + height) {
      const id = section.getAttribute('id');
      menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', setActiveMenu);
setActiveMenu();

// Typewriter Effect
const typewriter = document.getElementById("typewriter");
const careers = ["Data Analyst", "UX/UI Designer", "Game Developer"];
let careerIndex = 0;
let charIndex = 0;
let typing = true;
function type() {
  if (typing) {
    if (charIndex < careers[careerIndex].length) {
      typewriter.textContent += careers[careerIndex][charIndex];
      charIndex++;
      setTimeout(type, 150);
    } else {
      typing = false;
      setTimeout(type, 1000);
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = careers[careerIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 100);
    } else {
      typing = true;
      careerIndex = (careerIndex + 1) % careers.length;
      setTimeout(type, 500);
    }
  }
}
type();

// Contact Modal
const modal = document.getElementById("contactModal");
const btn = document.querySelector(".btn-dark");
const span = document.querySelector(".close");

btn.onclick = function(e) {
  e.preventDefault();
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
