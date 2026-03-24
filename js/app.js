const buttons = document.querySelectorAll('[data-overlay]');
const overlays = document.querySelectorAll('.overlay');
const closes = document.querySelectorAll('.overlay-close');

// OPEN MODAL
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.overlay;
    const overlay = document.getElementById(id);

    if (!overlay) return;

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
  });
});

// CLOSE BUTTON
closes.forEach(btn => {
  btn.addEventListener('click', () => {
    const overlay = btn.closest('.overlay');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  });
});

// CLICK OUTSIDE CLOSE
overlays.forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
    }
  });
});


import { initOverlays } from './overlay.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', async () => {
  initOverlays();
  await initI18n();

});
