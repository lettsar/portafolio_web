//Seleccionamos el DIV
const toggleBtn = document.getElementById("toggleTheme");
const header = document.getElementById("header");
const contenedor = document.getElementById("contenedor");

//Agregamos la Escucha el DIV
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
