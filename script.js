// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile toggle
  const btnToggle = document.querySelector('.nav-toggle');
  const nav       = document.querySelector('.nav');
  const links     = document.querySelectorAll('.nav-list a');
  btnToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    btnToggle.classList.toggle('open');
  });
  links.forEach(a =>
    a.addEventListener('click', () => {
      if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        btnToggle.classList.remove('open');
      }
    })
  );

  // Hero carousel com textos dinâmicos
  const slides     = document.querySelectorAll('.carousel .slide');
  const labelElem  = document.querySelector('.hero-label');
  const titleElem  = document.querySelector('.hero-title');
  const descElem   = document.querySelector('.hero-desc');
  let   idx        = 0;

  function updateHero() {
    const s = slides[idx];
    labelElem.textContent = s.dataset.label;
    titleElem.textContent = s.dataset.title;
    descElem.textContent  = s.dataset.desc;
  }

  // inicializa
  updateHero();
  slides[idx].classList.add('active');

  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
    updateHero();
  }, 5000);
});
document.addEventListener("DOMContentLoaded", function () {
  const common = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };

  new Swiper(".hero-swiper", {
    ...common,
    coverflowEffect: { depth: 200, modifier: 1.5, slideShadows: false },
  });
  new Swiper(".planos-swiper", common);
  new Swiper(".diferenciais-swiper", common);
  new Swiper(".depoimentos-swiper", common);
  new Swiper(".garantias-swiper", common);

});

document
  .querySelectorAll("button, .floating-btn, .call-btn, .text_button")
  .forEach((btn) => {
    btn.addEventListener("click", () => {
      // Gera um label legível: id, aria-label ou texto
      const label =
        btn.id ||
        btn.getAttribute("aria-label") ||
        btn.textContent.trim() ||
        "unknown_button";

      // Dispara evento no GA4
      gtag("event", "click", {
        event_category: "button, .floating-btn, .call-btn, .text_button",
        event_label: label,
      });
      // Opcional: log no console
      console.log(`GA4 ⇢ click on "${label}"`);
    });
  });
document.getElementById("support-btn").addEventListener("click", () => {
  gtag("event", "click_suporte", {
    event_category: "botao",
    event_label: "Suporte pelo WhatsApp",
  });
});
document.getElementById("whatsapp-btn").addEventListener("click", () => {
  gtag("event", "click_whatsapp", {
    event_category: "botao",
    event_label: "WhatsApp",
  });
});


