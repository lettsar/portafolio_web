import { cardGeneracion } from "./componentes.js";

const toggleBtn = document.getElementById("toggleTheme");
const header = document.getElementById("header");
const contenedor = document.getElementById("contenedor");

const cargarExperiencia = async () => {
  const $cont_experiencia = document.getElementById("cont_experiencia");
  const $fragment3 = document.createDocumentFragment();
  try {
    console.log("API Fetch + Async-Await");
    let res = await fetch("https://lettsar.github.io/portafolio_web/datos/experiencia.json");
    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }
    let json = await res.json();
    console.log(json);

    json.forEach((el) => {
      let imagen = el.imagen || "./img/iasa.png";
      $fragment3.appendChild(
        cardGeneracion(el.empresa, el.cargo, el.tiempo, imagen),
      );
    });

    $cont_experiencia.appendChild($fragment3);
  } catch (error) {
    console.error("Error al cargar experiencia:", error);
  }
};

toggleBtn.addEventListener("click", () => {
  header.classList.toggle("header-oscuro");
  contenedor.classList.toggle("contenedor_dfo2");
  toggleBtn.classList.toggle("modo-oscuro");

  if (toggleBtn.classList.contains("modo-oscuro")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  cargarExperiencia();

  let imgen = "./img/iasa.png";
  const experiencia = document.getElementById("cont_experiencia");
  experiencia.appendChild(cardGeneracion("Empresa", "Cargo", "Tiempo", imgen));
});
