// app.js
// Entry point for page navigation and global initialization

document.addEventListener('DOMContentLoaded', () => {
  const views = document.querySelectorAll('.view');
  const navButtons = document.querySelectorAll('header nav button');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.id.replace('btn-', '') + '-section';
      views.forEach(v => v.classList.add('hidden'));
      views.forEach(v => v.classList.remove('active'));
      document.getElementById(target)?.classList.add('active');
    });
  });
});
