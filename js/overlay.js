export function initOverlays() {
  let active = null;

  document.addEventListener('click', (e) => {

    const open = e.target.closest('[data-overlay]');
    if (open) {
      const overlay = document.getElementById(open.dataset.overlay);
      if (!overlay) return;

      if (active) active.setAttribute('aria-hidden', 'true');

      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      active = overlay;
      return;
    }

    const close = e.target.closest('.overlay-close');
    if (close) {
      close.closest('.overlay').setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
      active = null;
      return;
    }

    if (e.target.classList.contains('overlay')) {
      e.target.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
      active = null;
    }
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && active){
      active.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
      active = null;
    }
  });
}
