document.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-copy-link]');
  if (!btn) return;

  const url = btn.dataset.copyLink;
  const original = btn.textContent;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
    } else {
      const tmp = document.createElement('input');
      tmp.value = url;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      tmp.remove();
    }
    btn.textContent = 'Link copied!';
  } catch (err) {
    btn.textContent = 'Could not copy';
  }
  setTimeout(() => { btn.textContent = original; }, 1500);
});