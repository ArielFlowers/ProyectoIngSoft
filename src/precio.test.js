import { calcularSubtotal } from "./precio.js";

describe("Cálculo del subtotal", () => {
  it("debería calcular correctamente el subtotal", () => {
    expect(calcularSubtotal(2, 50)).toBe(100);
  });
});
