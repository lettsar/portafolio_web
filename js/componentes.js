export function cardGeneracion(empresa, cargo, tiempo, imgen) {
  // Contenedor principal
  let card = document.createElement("div");
  card.classList.add("card");
  // Imagen
  let cardImg = document.createElement("card-img");
  cardImg.classList.add("card-img");

  let emp = document.createElement("img");
  emp.src = imgen;
  emp.alt = "Imagen Empresa";
  cardImg.appendChild(emp);

  // Descripción
  let cardDesc = document.createElement("card-desc");
  cardDesc.classList.add("card-desc");

  const pEmpresa = document.createElement("p");
  pEmpresa.textContent = `Empresa: ${empresa}`;

  const pCargo = document.createElement("p");
  pCargo.textContent = `Cargo: ${cargo}`;

  const pTiempo = document.createElement("p");
  pTiempo.textContent = `Tiempo: ${tiempo}`;

  cardDesc.appendChild(pEmpresa);
  cardDesc.appendChild(pCargo);
  cardDesc.appendChild(pTiempo);
  card.append(cardImg, cardDesc);

  return card;
}
