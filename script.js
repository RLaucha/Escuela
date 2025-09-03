// ------- FAVICON -------
(function addFavicon(){
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = 'img/sma_logo_transparente.png'; // asegurate de la ruta
  document.head.appendChild(link);
})();

// ------- LOGO EN NAVBAR -------
document.addEventListener('DOMContentLoaded', () => {
  const logoLink = document.querySelector('.logo-link');
  if (logoLink && !logoLink.querySelector('img')) {
    const logoImg = document.createElement('img');
    logoImg.src = 'img/sma_logo_transparente.png';
    logoImg.alt = 'Escudo del Colegio San Miguel Arcángel';
    logoImg.className = 'logo-img';
    logoLink.insertBefore(logoImg, logoLink.firstChild);
  }

  // ------- MENÚ MÓVIL -------
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // cerrar al clickear un enlace (solo si está abierto)
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileMenu.classList.remove('active');
        }
      });
    });
  }

  // ------- AÑO EN FOOTER -------
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ------- FORMULARIO (feedback simple front) -------
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.form-msg');
      const data = new FormData(form);
      const nombre = (data.get('nombre') || '').toString().trim();
      const email  = (data.get('email')  || '').toString().trim();
      const mensaje= (data.get('mensaje')|| '').toString().trim();

      if (!nombre || !email || !mensaje) {
        if (msg) msg.textContent = 'Por favor, completá todos los campos.';
        return;
      }
      // Aquí podés integrar un backend o servicio de formularios.
      if (msg) msg.textContent = '¡Gracias! Recibimos tu mensaje.';
      form.reset();
    });
  }
});
