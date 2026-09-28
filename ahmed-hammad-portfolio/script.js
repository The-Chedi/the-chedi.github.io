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

/* ============ LIGHTBOX (Plates) ============ */
(function () {
  const cards = document.querySelectorAll('.plate-card[data-img]');
  if (!cards.length) return;

  const lb       = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  const lbCap    = document.getElementById('lb-caption');
  const btnClose = lb.querySelector('.lb-close');
  const btnPrev  = lb.querySelector('.lb-prev');
  const btnNext  = lb.querySelector('.lb-next');

  const images = [...cards].map(c => ({
    src:   c.dataset.img,
    title: c.dataset.title || ''
  }));

  let current = 0;

  function open(index) {
    current = index;
    const item = images[current];
    lbImg.src = item.src;
    lbImg.alt = item.title;
    lbCap.textContent = item.title;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    lbImg.src = '';
  }

  function next() {
    current = (current + 1) % images.length;
    lbImg.src = images[current].src;
    lbCap.textContent = images[current].title;
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
    lbImg.src = images[current].src;
    lbCap.textContent = images[current].title;
  }

  /* Click image → open */
  cards.forEach((card, i) => {
    card.addEventListener('click', () => open(i));
  });

  /* Buttons */
  btnClose.addEventListener('click', close);
  btnNext.addEventListener('click', (e) => { e.stopPropagation(); next(); });
  btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prev(); });

  /* Click outside image → close */
  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });

  /* Keyboard */
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft')  prev();
  });
})();

