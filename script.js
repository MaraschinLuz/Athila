// script.js

document.addEventListener("DOMContentLoaded", () => {
  const btnToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  // Abre/fecha menu mobile
  btnToggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    btnToggle.classList.toggle("open");
  });

  // Fecha o menu ao clicar em qualquer link
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        btnToggle.classList.remove("open");
      }
    })
  );

  // —— carrossel automático ——
  const slides = document.querySelectorAll(".carousel .slide");
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }, 5000); // troca a cada 5s

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
        delay: 1500,
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
});
