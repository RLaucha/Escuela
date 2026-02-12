const catalogo = [
  {
    categoria: "Diseñador",
    perfumes: [
      { nombre: "Sauvage EDT", descripcion: "Fresco, masculino y magnético.", imagen: "assets/img/perfume-1.svg" },
      { nombre: "Stronger With You Intensely", descripcion: "Dulce y potente para noches frías.", imagen: "assets/img/perfume-2.svg" },
      { nombre: "Stronger With You EDT", descripcion: "Cálido y versátil, ideal para diario.", imagen: "assets/img/perfume-3.svg" },
      { nombre: "Burberry Hero", descripcion: "Amaderado moderno, elegante y limpio.", imagen: "assets/img/perfume-4.svg" },
      { nombre: "Scandal Pour Homme", descripcion: "Caramelo intenso para destacar.", imagen: "assets/img/perfume-5.svg" },
      { nombre: "Le Male Elixir", descripcion: "Vainilla profunda y adictiva.", imagen: "assets/img/perfume-6.svg" },
      { nombre: "Ombre Leather", descripcion: "Cuero fino, elegante y con presencia.", imagen: "assets/img/perfume-7.svg" },
      { nombre: "Dior Homme Intense", descripcion: "Iris cremoso y sofisticado.", imagen: "assets/img/perfume-8.svg" }
    ]
  },
  {
    categoria: "Nicho",
    perfumes: [
      { nombre: "Erba Pura", descripcion: "Frutal explosivo y moderno.", imagen: "assets/img/perfume-1.svg" },
      { nombre: "Erba Gold", descripcion: "Más refinado y brillante.", imagen: "assets/img/perfume-2.svg" },
      { nombre: "Aoud Leather", descripcion: "Cuero intenso con carácter.", imagen: "assets/img/perfume-3.svg" },
      { nombre: "Arabians Tonka", descripcion: "Oriental potente e inolvidable.", imagen: "assets/img/perfume-4.svg" },
      { nombre: "Aoud Vanille", descripcion: "Vainilla elegante con profundidad.", imagen: "assets/img/perfume-5.svg" },
      { nombre: "Red Tobacco", descripcion: "Dulce especiado de alta proyección.", imagen: "assets/img/perfume-6.svg" },
      { nombre: "Gris Charnel", descripcion: "Fino, envolvente y sofisticado.", imagen: "assets/img/perfume-7.svg" },
      { nombre: "Narcotic Delight", descripcion: "Oscuro, lujoso y adictivo.", imagen: "assets/img/perfume-8.svg" }
    ]
  }
];

const catalogGrid = document.getElementById("catalogGrid");

catalogo.forEach((bloque) => {
  const section = document.createElement("section");
  section.className = "catalog-section";

  const title = document.createElement("h3");
  title.className = "catalog-title";
  title.textContent = bloque.categoria;
  section.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "catalog-grid";

  bloque.perfumes.forEach((perfume) => {
    const card = document.createElement("article");
    card.className = "perfume-card";
    card.innerHTML = `
      <img src="${perfume.imagen}" alt="${perfume.nombre}" loading="lazy" />
      <div class="perfume-body">
        <h3>${perfume.nombre}</h3>
        <p>${perfume.descripcion}</p>
      </div>
    `;
    grid.appendChild(card);
  });

  section.appendChild(grid);
  catalogGrid.appendChild(section);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const contactForm = document.getElementById("contactForm");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const formSuccess = document.getElementById("formSuccess");

const showError = (id, text) => {
  document.getElementById(id).textContent = text;
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  formSuccess.textContent = "";

  showError("errorNombre", "");
  showError("errorEmail", "");
  showError("errorMensaje", "");

  if (nombre.value.trim().length < 2) {
    showError("errorNombre", "Ingresá un nombre válido (mínimo 2 letras).");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError("errorEmail", "Ingresá un email válido.");
    valid = false;
  }

  if (mensaje.value.trim().length < 10) {
    showError("errorMensaje", "El mensaje debe tener al menos 10 caracteres.");
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = "¡Gracias por escribirnos! Te contactaremos pronto.";
    contactForm.reset();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
