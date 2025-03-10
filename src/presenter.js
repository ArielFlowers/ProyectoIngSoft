import { calcularPrecioFinal } from "./precio";

document.getElementById("calcular").addEventListener("click", function() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const estado = document.getElementById("estado").value;

  const precioFinal = calcularPrecioFinal(cantidad, precio, estado);

  console.log(precioFinal); // Verifica que el cálculo sea correcto

  document.getElementById("resultado").innerText = `Precio total: $${precioFinal.toFixed(2)}`;
});
