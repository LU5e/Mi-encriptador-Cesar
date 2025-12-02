import cipher from "./cipher.js";

// Elementos del HTML
const inputMensaje = document.getElementById("mensaje");
const inputOffset = document.getElementById("offset");
const resultado = document.getElementById("resultado");

const btnCifrar = document.getElementById("btnCifrar");
const btnDescifrar = document.getElementById("btnDescifrar");

// Botón CIFRAR
btnCifrar.addEventListener("click", () => {
  const texto = inputMensaje.value.toUpperCase();
  const offset = Number(inputOffset.value);

  if (!texto || !offset) {
    alert("Debes ingresar un mensaje y un número de desplazamiento");
    return;
  }

  const mensajeCifrado = cipher.encode(offset, texto);
  resultado.textContent = mensajeCifrado;
});

// Botón DESCIFRAR
btnDescifrar.addEventListener("click", () => {
  const texto = inputMensaje.value.toUpperCase();
  const offset = Number(inputOffset.value);

  if (!texto || !offset) {
    alert("Debes ingresar un mensaje y un número de desplazamiento");
    return;
  }

  const mensajeDescifrado = cipher.decode(offset, texto);
  resultado.textContent = mensajeDescifrado;
});
