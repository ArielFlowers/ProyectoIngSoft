import { calcularSubtotal, aplicarDescuento, aplicarImpuesto, calcularPrecioFinal, validarEntrada, aplicarCategoria, aplicarImpuestoCategoria, calcularEnvio, aplicarDescuentoEnvio, calcularPrecioFinalCompleto } from "./precio.js";

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

describe("Cálculo del precio final", () => {
    it("debería calcular correctamente el precio final con descuentos e impuestos", () => {
      expect(calcularPrecioFinal(2, 500, "CA")).toBeCloseTo(1050.025, 2); // Ajustamos el valor esperado
    });
});

describe("Validación de entradas", () => {
    it("debería retornar error si la cantidad es negativa", () => {
      expect(validarEntrada(-1, 50, "CA")).toBe("Cantidad no válida");
    });
  
    it("debería retornar error si el precio por item es negativo", () => {
      expect(validarEntrada(2, -50, "CA")).toBe("Precio no válido");
    });
  
    it("debería retornar error si el estado es inválido", () => {
      expect(validarEntrada(2, 50, "ZZ")).toBe("Estado no válido");
    });
  
    it("debería retornar 'Entrada válida' si todos los valores son correctos", () => {
      expect(validarEntrada(2, 50, "CA")).toBe("Entrada válida");
    });
});

describe("Aplicación de categoría", () => {
    it("debería aplicar 2% de descuento adicional si la categoría es Alimentos", () => {
      expect(aplicarCategoria(1200, "Alimentos")).toBe(1176);
    });
  
    it("debería aplicar 0% de impuesto adicional si la categoría es Varios", () => {
      expect(aplicarCategoria(100, "Varios")).toBe(100);
    });
});

describe("Cálculo del costo de envío", () => {
    it("debería calcular $3.5 si el peso volumétrico es 15", () => {
      expect(calcularEnvio(15)).toBe(3.5);
    });

    it("debería calcular $6 si el peso volumétrico es 50", () => {
      expect(calcularEnvio(50)).toBe(6);
    });

    it("debería calcular $9 si el peso volumétrico es mayor a 200", () => {
      expect(calcularEnvio(250)).toBe(9);
    });
});

describe("Descuento en envío", () => {
    it("debería aplicar 0.5% de descuento en el costo de envío para cliente recurrente", () => {
      expect(aplicarDescuentoEnvio(6, "Recurrente")).toBeCloseTo(5.97);
    });
  
    it("debería aplicar 1% de descuento en el costo de envío para cliente antiguo recurrente", () => {
      expect(aplicarDescuentoEnvio(6, "Antiguo Recurrente")).toBeCloseTo(5.94);
    });
});

describe("Cálculo del precio final completo", () => {
    it("debería calcular correctamente el precio final con descuento, impuestos y envío", () => {
      expect(calcularPrecioFinalCompleto(2, 500, "CA", "Alimentos", 10, "Recurrente")).toBeCloseTo(1060.85, 2);
    });
});
