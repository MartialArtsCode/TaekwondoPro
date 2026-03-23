export async function initI18n() {

  const lang = navigator.language.startsWith('es') ? 'es' : 'en';

  const res = await fetch(`/locales/${lang}.json`);
  const dict = await res.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

}