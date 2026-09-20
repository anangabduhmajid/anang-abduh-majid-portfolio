const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('pointermove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

window.initPortfolio = () => {
  const revealItems = document.querySelectorAll('.reveal');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('mobile-open', !isOpen);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('mobile-open');
  }));

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.innerHTML = '<button type="button" aria-label="Tutup gambar">×</button><img alt="" />';
  document.body.append(lightbox);
  const lightboxImage = lightbox.querySelector('img');
  const closeLightbox = () => lightbox.classList.remove('is-open');
  document.querySelectorAll('.malika-gallery img, .bpbd-gallery img, .design-gallery img').forEach((image) => {
    image.addEventListener('click', () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add('is-open');
    });
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') image.click();
    });
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.tagName === 'BUTTON') closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
};
