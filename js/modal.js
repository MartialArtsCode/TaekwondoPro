export function initModals() {
  let active = null;

  document.addEventListener('click', (e) => {

    const open = e.target.closest('[data-modal]');
    if (open) {
      const modal = document.getElementById(open.dataset.modal);
      if (!modal) return;

      if (active) active.setAttribute('aria-hidden', 'true');

      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      active = modal;
      return;
    }

    const close = e.target.closest('.modal-close');
    if (close) {
      close.closest('.modal').setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
      active = null;
      return;
    }

    if (e.target.classList.contains('modal')) {
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