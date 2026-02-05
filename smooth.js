let current = 0;
let target = 0;
const ease = 0.06;

/* SMOOTH SCROLL ENGINE */
function smoothScroll() {
  target = window.scrollY;
  current += (target - current) * ease;

  document.body.style.transform =
    `translateY(${-current}px)`;

  requestAnimationFrame(smoothScroll);
}

smoothScroll();

/* REVEAL ON SCROLL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// MICRO PARALLAX
const parallaxItem = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const movement = scrollY * 0.08; // VERY subtle
  if (parallaxItem) {
    parallaxItem.style.transform = `translateY(${movement}px)`;
  }
});
// DEPTH SCROLL EFFECT
const depthSections = document.querySelectorAll(".intro, .silence, .craft");

window.addEventListener("scroll", () => {
  depthSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const offset = rect.top * 0.03;
    section.style.transform = `translateY(${offset}px)`;
  });
});


