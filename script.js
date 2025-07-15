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


// —— carrossel automático —— 
const slides = document.querySelectorAll('.carousel .slide');
let idx = 0;
setInterval(() => {
  slides[idx].classList.remove('active');
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add('active');
}, 1000); // troca a cada 5s



