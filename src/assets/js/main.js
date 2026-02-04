// Sticky header condensing on scroll
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-condensed');
  } else {
    nav.classList.remove('nav-condensed');
  }
});

// Scroll-triggered animations using Intersection Observer
const scrollAnimateElements = document.querySelectorAll('.scroll-animate');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: stop observing after animation triggers
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

scrollAnimateElements.forEach(el => {
  scrollObserver.observe(el);
});
