// script.js

document.addEventListener('DOMContentLoaded', () => {
  const btnToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-list a');

  // Abre/fecha menu mobile
  btnToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    btnToggle.classList.toggle('open');
  });

  // Fecha o menu ao clicar em qualquer link
  navLinks.forEach(link =>
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        btnToggle.classList.remove('open');
      }
    })
  );
});


// Ao carregar, verifica tema salvo
const switchInput = document.querySelector('#theme-switch');
const root         = document.documentElement;
const savedTheme   = localStorage.getItem('theme') || 'dark';

root.setAttribute('data-theme', savedTheme);
switchInput.checked = savedTheme === 'light';

// Quando alterado, muda tema e persiste
switchInput.addEventListener('change', () => {
  const next = switchInput.checked ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
