// Optional JS: Copy template to clipboard
document.addEventListener('click', e => {
  const btn = e.target.closest('.copy-btn');
  if (!btn) return;
  const pre = btn.previousElementSibling;
  if (!pre) return;
  const text = pre.innerText.replace('{"DATE"}', new Date().toLocaleDateString());
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      btn.innerText = 'Copied!';
      setTimeout(() => btn.innerText = 'Copy', 1400);
    });
  }
});
