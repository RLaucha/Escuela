document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // MENÚ MOBILE
  // ==========================
  const mobileMenuBtn = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("active");
    });

    // Cerrar menú al hacer click en links
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          mobileMenuBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // ==========================
  // AÑO AUTOMÁTICO FOOTER
  // ==========================
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ==========================
  // FORMULARIO DE CONTACTO
  // ==========================
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    const statusMsg = contactForm.querySelector(".form-msg");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = contactForm.querySelector("[name='nombre']");
      const emailInput = contactForm.querySelector("[name='email']");
      const msgInput = contactForm.querySelector("[name='mensaje']");

      const nombreVal = nameInput?.value.trim();
      const emailVal = emailInput?.value.trim();
      const mensajeVal = msgInput?.value.trim();

      if (!nombreVal || !emailVal || !mensajeVal) {
        if (statusMsg) {
          statusMsg.textContent = "Por favor, completá todos los campos obligatorios.";
        }
        return;
      }

      if (statusMsg) {
        statusMsg.textContent = "Mensaje enviado. Gracias por contactarte.";
      }

      contactForm.reset();
    });
  }

  // ==========================
  // ANIMACIONES FADE-UP
  // ==========================
  const fadeEls = document.querySelectorAll(".fade-up");
  if (fadeEls.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up-active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // fallback: sin observer, mostrar todo
    fadeEls.forEach(el => el.classList.add("fade-up-active"));
  }

  // ==========================
  // TABS GALERÍA
  // ==========================
  const gallerySection = document.querySelector(".gallery-section");
  if (gallerySection) {
    const tabButtons = gallerySection.querySelectorAll(".gallery-tab");
    const panels = gallerySection.querySelectorAll(".gallery-panel");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;

        tabButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        panels.forEach(panel => {
          if (panel.id === targetId) {
            panel.classList.add("active");
            panel.hidden = false;
          } else {
            panel.classList.remove("active");
            panel.hidden = true;
          }
        });
      });
    });
  }

  // ==========================
  // LIGHTBOX GALERÍA
  // ==========================
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox ? lightbox.querySelector(".lightbox__img") : null;
  const lightboxClose = lightbox ? lightbox.querySelector(".lightbox__close") : null;

  if (lightbox && lightboxImg && lightboxClose) {
    const galleryImages = document.querySelectorAll(".gallery-item img, .mini-gallery-item img");

    const openLightbox = (src, alt) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.classList.add("lightbox--open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      lightbox.classList.remove("lightbox--open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lightboxImg.src = "";
      lightboxImg.alt = "";
    };

    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        openLightbox(img.src, img.alt);
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("lightbox--open")) {
        closeLightbox();
      }
    });
  }
});
