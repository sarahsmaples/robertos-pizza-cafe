// Sticky header condensing on scroll
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('nav-condensed');
  } else {
    nav.classList.remove('nav-condensed');
  }
});

// Mobile menu toggle with slide animation
const menuButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const mobileMenu = document.getElementById('navbar-default');

if (menuButton && mobileMenu) {
  const isMobile = () => window.innerWidth < 768;

  const setupMobileMenu = () => {
    if (isMobile()) {
      mobileMenu.style.overflow = 'hidden';
      mobileMenu.style.transition = 'max-height 0.3s ease-out';
      if (menuButton.getAttribute('aria-expanded') !== 'true') {
        mobileMenu.style.maxHeight = '0';
      }
    } else {
      mobileMenu.style.overflow = '';
      mobileMenu.style.transition = '';
      mobileMenu.style.maxHeight = '';
    }
  };

  setupMobileMenu();
  window.addEventListener('resize', setupMobileMenu);

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);

    if (isExpanded) {
      mobileMenu.style.maxHeight = '0';
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    }
  });
}

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
