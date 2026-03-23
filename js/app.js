const buttons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.modal-close');

// OPEN MODAL
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.modal;
    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  });
});

// CLOSE BUTTON
closes.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  });
});

// CLICK OUTSIDE CLOSE
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});


import { initModals } from './modal.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', async () => {
  initModals();
  await initI18n();

});
