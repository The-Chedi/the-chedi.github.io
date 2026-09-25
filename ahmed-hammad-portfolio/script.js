/* Year */
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

/* Scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll(
  '.intro, .intro-label, .intro-title, .intro-body, .grid-header, .grid-card, .quote-text, .quote-author, .stat, .footer-inner, .cv-intro, .cv-block, .story-funky, .contact-tile, .contact-cta, .plate-card'
).forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

/* Stagger cards */
document.querySelectorAll('.grid-card, .plate-card, .contact-tile, .award-funky').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.06) + 's';
});

/* Mobile nav close */
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});
