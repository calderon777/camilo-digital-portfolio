(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-language-toggle]');
  let saved = null;
  try { saved = localStorage.getItem('portfolio-language'); } catch (error) { /* storage unavailable */ }
  let language = saved === 'es' ? 'es' : 'en';

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    root.lang = language;
    document.querySelectorAll('[data-en][data-es]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    if (toggle) {
      toggle.textContent = language === 'en' ? 'ES' : 'EN';
      toggle.setAttribute('aria-label', language === 'en' ? 'Cambiar a español' : 'Switch to English');
    }
    try { localStorage.setItem('portfolio-language', language); } catch (error) { /* storage unavailable */ }
  }

  toggle?.addEventListener('click', () => applyLanguage(language === 'en' ? 'es' : 'en'));
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  applyLanguage(language);

  // Mobile navigation
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('[data-menu-toggle]');
  if (header && menuButton) {
    menuButton.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    header.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  // Digital-twin video: respect reduced motion, only play while visible
  const video = document.querySelector('[data-twin-video]');
  if (video) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.removeAttribute('autoplay');
      video.pause();
      video.controls = true;
    } else if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { video.play().catch(() => {}); } else { video.pause(); }
        });
      }, { threshold: 0.2 }).observe(video);
    }
  }
})();
