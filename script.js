// Año dinámico en el footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Menú mobile
const mobileMenuBtn = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("active");
  });
}

// Validación básica del formulario de contacto
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

    // Simulación de envío OK
    if (statusMsg) {
      statusMsg.textContent = "Mensaje enviado. Gracias por contactarte.";
    }

    contactForm.reset();
  });
}
