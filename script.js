(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-language-toggle]');
  const saved = localStorage.getItem('portfolio-language');
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
    localStorage.setItem('portfolio-language', language);
  }

  toggle?.addEventListener('click', () => applyLanguage(language === 'en' ? 'es' : 'en'));
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
  applyLanguage(language);
})();
