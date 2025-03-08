import { calcularSubtotal } from "./precio.js";
import { aplicarDescuento } from "./precio.js";
import { aplicarImpuesto } from "./precio.js";

describe("Cálculo del subtotal", () => {
    it("debería calcular correctamente el subtotal", () => {
      expect(calcularSubtotal(2, 50)).toBe(100);
    });
  });

describe("Aplicación de descuentos", () => {
  it("debería aplicar 3% de descuento si el total es mayor a $1000", () => {
    expect(aplicarDescuento(1200)).toBeCloseTo(1164);
  });

  it("debería aplicar 15% de descuento si el total es mayor a $30,000", () => {
    expect(aplicarDescuento(31000)).toBeCloseTo(26350);
  });
});

describe("Aplicación de impuestos", () => {
    it("debería aplicar 8.25% si el estado es California", () => {
      expect(aplicarImpuesto(100, "CA")).toBeCloseTo(108.25);
    });
  
    it("debería aplicar 6.25% si el estado es Texas", () => {
      expect(aplicarImpuesto(100, "TX")).toBeCloseTo(106.25);
    });
  });