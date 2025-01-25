// This script adds a simple animation effect when hovering over the service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  window.addEventListener("scroll", function () {
    const heroSection = document.querySelector(".hero-section");
    let scrollPosition = window.scrollY;
  
    heroSection.style.backgroundSize = 100 + scrollPosition * 0.1 + "%";
  });
  