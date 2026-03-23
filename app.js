(() => {

  let activeModal = null;
  let lastFocused = null;

  const FOCUSABLE = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';

  function openModal(id, trigger) {
    const modal = document.getElementById(id);
    if (!modal) return;

    if (activeModal) closeModal(activeModal);

    activeModal = modal;
    lastFocused = trigger || document.activeElement;

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const focusables = modal.querySelectorAll(FOCUSABLE);
    setTimeout(() => (focusables[0] || modal).focus(), 0);
  }

  function closeModal(modal) {
    if (!modal) return;

    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }

    activeModal = null;
  }

  // EVENT DELEGATION
  document.addEventListener('click', (e) => {

    const openBtn = e.target.closest('[data-modal]');
    if (openBtn) {
      openModal(openBtn.dataset.modal, openBtn);
      return;
    }

    const closeBtn = e.target.closest('.modal-close');
    if (closeBtn) {
      closeModal(closeBtn.closest('.modal'));
      return;
    }

    if (e.target.classList.contains('modal')) {
      closeModal(e.target);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeModal) {
      closeModal(activeModal);
    }
  });

  document.querySelectorAll('.modal-dialog').forEach(d => {
    d.addEventListener('click', e => e.stopPropagation());
  });

  // 🌍 TRANSLATION
  (() => {

    const lang = navigator.language.startsWith('es') ? 'es' : 'en';

    const t = {
      en: {
        hero_title: "Master The Art",
        hero_sub: "Build confidence. Transform your life.",
        about_title: "About",
        about_text: "We build discipline, confidence and strength."
      },
      es: {
        hero_title: "Domina el Arte",
        hero_sub: "Construye confianza. Transforma tu vida.",
        about_title: "Acerca de",
        about_text: "Desarrollamos disciplina, confianza y fuerza."
      }
    };

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[lang] && t[lang][key]) {
        el.textContent = t[lang][key];
      }
    });

  })();

})();