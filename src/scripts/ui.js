// ui.js
// Handle DOM updates, view switching, and simple UI helpers

export function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.querySelector(`#${viewId}`).classList.remove('hidden');
}
