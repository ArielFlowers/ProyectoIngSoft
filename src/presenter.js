import { calcularPrecioFinal, calcularPrecioFinalCompleto } from "./precio"; // Asegúrate de que esta ruta sea correcta

document.getElementById("calcular").addEventListener("click", function() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const estado = document.getElementById("estado").value;
  const categoria = document.getElementById("categoria").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const tipoCliente = document.getElementById("tipoCliente").value;


  // Validación de los campos de entrada
  if (isNaN(cantidad) || cantidad <= 0) {
    document.getElementById("resultado").innerText = "Por favor, ingrese una cantidad válida.";
    return;
  }

  if (isNaN(precio) || precio <= 0) {
    document.getElementById("resultado").innerText = "Por favor, ingrese un precio válido.";
    return;
  }

  if (!estado) {
    document.getElementById("resultado").innerText = "Por favor, seleccione un estado.";
    return;
  }

  const precioFinal = calcularPrecioFinalCompleto(cantidad, precio, estado, categoria, peso, tipoCliente);

  console.log(precioFinal);

  // Mostrar el precio final con 2 decimales
  document.getElementById("resultado").innerText = `Precio total: $${precioFinal.toFixed(2)}`;
});
