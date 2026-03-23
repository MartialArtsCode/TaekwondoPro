import { initModals } from './modal.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', async () => {
  initModals();
  await initI18n();
});