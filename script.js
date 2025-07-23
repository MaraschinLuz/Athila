// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile toggle
  const btnToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const links = document.querySelectorAll(".nav-list a");
  btnToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    btnToggle.classList.toggle("open");
  });
  links.forEach((a) =>
    a.addEventListener("click", () => {
      if (nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        btnToggle.classList.remove("open");
      }
    })
  );

  const slides = document.querySelectorAll(".carousel .slide");
  const labelEl = document.querySelector(".hero-label");
  const titleEl = document.querySelector(".hero-title");
  const descEl = document.querySelector(".hero-desc");
  const daysEl = document.querySelector(".hero-timer .days");
  const hoursEl = document.querySelector(".hero-timer .hours");
  const minsEl = document.querySelector(".hero-timer .minutes");
  const secsEl = document.querySelector(".hero-timer .seconds");

  let current = 0;
  const slideInterval = 5000; // troca a cada 5s

  // configure aqui a data final da oferta (YYYY, Mês-1, dia, hora, min, seg)
  const offerEnd = new Date(2025, 6, 31, 23, 59, 59);

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  // atualiza label/título/descrição do slide ativo
  function updateSlideText() {
    const s = slides[current];
    labelEl.textContent = s.dataset.label;
    titleEl.textContent = s.dataset.title;
    descEl.textContent = s.dataset.desc;
  }

  // faz a rotação de slides
  function nextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
    updateSlideText();
  }

  // atualiza o countdown até offerEnd
  function updateCountdown() {
    const now = new Date();
    let diff = Math.floor((offerEnd - now) / 1000);
    if (diff < 0) diff = 0;
    const d = Math.floor(diff / 86400);
    const h = Math.floor((diff % 86400) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    daysEl.textContent = pad(d);
    hoursEl.textContent = pad(h);
    minsEl.textContent = pad(m);
    secsEl.textContent = pad(s);
  }

  // inicialização
  slides.forEach((s) => s.classList.remove("active"));
  slides[0].classList.add("active");
  updateSlideText();
  updateCountdown();

  // timers
  setInterval(nextSlide, slideInterval);
  setInterval(updateCountdown, 1000);
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
