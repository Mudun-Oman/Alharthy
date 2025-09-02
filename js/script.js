const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdown = document.getElementById("dropdown");

  // Toggle mobile nav
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Toggle Services dropdown on mobile
  dropdownToggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent link jump
      dropdown.classList.toggle("open");
    }
  });

  // Close menu on outside click
  window.addEventListener("click", function(e) {
    if (
      !dropdown.contains(e.target) &&
      !hamburger.contains(e.target) &&
      window.innerWidth <= 768
    ) {
      dropdown.classList.remove("open");
    }
  });

  // Reset on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("show");
      dropdown.classList.remove("open");
    }
  });


document.addEventListener('DOMContentLoaded', () => {
  const lastWord = document.querySelector('.word:nth-child(4)');
  const bgLines = document.querySelector('.bg-lines');

  if (lastWord && bgLines) {
    lastWord.addEventListener('animationend', () => {
      bgLines.classList.add('fade-out');

      // Optional: hide the lines after fade-out transition
      setTimeout(() => {
        bgLines.style.display = 'none';
      }, 1000); // match with CSS transition duration
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about-section');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      aboutSection.classList.add('visible');
      window.removeEventListener('scroll', revealOnScroll);
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
});
const aboutSection = document.querySelector('.about-section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  const sectionTop = aboutSection.getBoundingClientRect().top;

  if (sectionTop < triggerBottom) {
    aboutSection.classList.add('visible');
    window.removeEventListener('scroll', revealOnScroll);
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


let scrollIndex = 0;

function scrollService(direction) {
  const carousel = document.getElementById("serviceCarousel");
  const cardWidth = carousel.querySelector(".service-card").offsetWidth + 32; // 32px gap
  scrollIndex += direction;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  let nextScroll = scrollIndex * cardWidth;
  if (nextScroll < 0) {
    nextScroll = 0;
    scrollIndex = 0;
  } else if (nextScroll > maxScroll) {
    nextScroll = maxScroll;
    scrollIndex -= 1;
  }

  carousel.scrollTo({
    left: nextScroll,
    behavior: "smooth"
  });
}
function scrollCards(direction) {
    const container = document.getElementById('cardContainer');
    const scrollAmount = 350; // adjust as needed

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }

  const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });



