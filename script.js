function onPrimaryCTA() {
  const el = document.getElementById('purchase');
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });


  showToast("Added ChronoNAD+ to cart (mock)");
}

function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '30px',
    background: '#002f5c',
    color: 'white',
    padding: '12px 16px',
    borderRadius: '6px',
    fontWeight: '600',
    zIndex: 9999
  });
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = 0; t.style.transition = "opacity 0.4s"; }, 2000);
  setTimeout(() => t.remove(), 2500);
}
