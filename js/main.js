const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.reportValidity()) {
      history.replaceState(null, '', location.pathname + location.search);
      location.hash = 'toast-cadastro';
    }
  });
  form.addEventListener('reset', () => {
    if (location.hash === '#toast-cadastro') {
      history.replaceState(null, '', location.pathname + location.search);
    }
  });
  form.querySelector('[data-submit]').disabled = false;
}

const modal = document.querySelector('.modal');
if (modal) {
  let previousFocus;
  const syncModal = () => {
    if (location.hash === '#' + modal.id) {
      previousFocus = document.activeElement;
      modal.querySelector('.modal__actions a').focus();
    } else if (modal.contains(document.activeElement)) {
      previousFocus?.focus();
    }
  };
  window.addEventListener('hashchange', syncModal);
  document.addEventListener('keydown', (event) => {
    if (location.hash !== '#' + modal.id) return;
    if (event.key === 'Escape') location.hash = 'como-doar';
    if (event.key === 'Tab') {
      const links = [...modal.querySelectorAll('.modal__actions a')];
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  syncModal();
}
