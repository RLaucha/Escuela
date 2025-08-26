// Agregar favicon dinámicamente
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = 'img/sma_logo_transparente.png';
document.head.appendChild(favicon);

document.addEventListener('DOMContentLoaded', () => {
    // Agregar logo dinámicamente en el navbar
    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        // Eliminar logo anterior si existe
        const oldLogo = logoLink.querySelector('.logo-img');
        if (oldLogo) oldLogo.remove();

        // Crear y agregar el logo
        const logoImg = document.createElement('img');
        logoImg.src = 'img/sma_logo_transparente.png';
        logoImg.alt = 'Escudo del Colegio';
        logoImg.className = 'logo-img';
        logoLink.insertBefore(logoImg, logoLink.firstChild);
    }

    // Menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Cierra el menú al hacer clic en un enlace (solo en móvil)
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        });
    }
});