export function calcularSubtotal(cantidad, precioUnitario) {
    return cantidad * precioUnitario;
}

export function aplicarDescuento(total) {
    const descuentos = [
        { umbral: 30000, tasa: 0.15 },
        { umbral: 10000, tasa: 0.10 },
        { umbral: 7000, tasa: 0.07 },
        { umbral: 3000, tasa: 0.05 },
        { umbral: 1000, tasa: 0.03 },
    ];
    const descuento = descuentos.find(d => total >= d.umbral)?.tasa || 0;
    return total * (1 - descuento);
}

export function aplicarImpuesto(total, estado) {
    const impuestos = { UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04, CA: 0.0825 };
    return total * (1 + (impuestos[estado] || 0));
}

export function calcularPrecioFinal(cantidad, precioUnitario, estado) {
    const subtotal = calcularSubtotal(cantidad, precioUnitario);
    const conDescuento = aplicarDescuento(subtotal);
    return aplicarImpuesto(conDescuento, estado);
}

export function validarEntrada(cantidad, precioUnitario, estado) {
    if (cantidad <= 0) return "Cantidad no válida";
    if (precioUnitario <= 0) return "Precio no válido";
    if (!["UT", "NV", "TX", "AL", "CA"].includes(estado)) return "Estado no válido";
    return "Entrada válida";
}

export function aplicarCategoria(total, categoria) {
    const categorias = {
        Alimentos: { descuento: 0.02, impuesto: 0 },
        Bebidas_alcoholicas: { descuento: 0, impuesto: 0.07 },
        Material_de_escritorio: { descuento: 0.015, impuesto: 0 },
        Muebles: { descuento: 0, impuesto: 0.03 },
        Electronicos: { descuento: 0.01, impuesto: 0.04 },
        Vestimenta: { descuento: 0, impuesto: 0.02 },
        Varios: { descuento: 0, impuesto: 0 }
    };
    const categoriaSeleccionada = categorias[categoria] || {};
    const totalConDescuento = total * (1 - categoriaSeleccionada.descuento);
    return totalConDescuento * (1 + categoriaSeleccionada.impuesto);
}

export function calcularEnvio(peso) {
    if (peso <= 10) return 0;
    if (peso <= 20) return 3.5;
    if (peso <= 40) return 5;
    if (peso <= 80) return 6;
    if (peso <= 100) return 6.5;
    if (peso <= 200) return 8;
    return 9;
}

export function aplicarDescuentoEnvio(costoEnvio, tipoCliente) {
    const descuentosCliente = {
        Normal: 0,
        Recurrente: 0.005,
        "Antiguo Recurrente": 0.01,
        Especial: 0.015
    };
    const descuento = descuentosCliente[tipoCliente] || 0;
    return costoEnvio * (1 - descuento);
}

export function calcularPrecioFinalCompleto(cantidad, precioUnitario, estado, categoria, peso, tipoCliente) {
    const validacion = validarEntrada(cantidad, precioUnitario, estado);
    if (validacion !== "Entrada válida") {
        return validacion; // Retorna el error si la entrada no es válida
    }

    const subtotal = calcularSubtotal(cantidad, precioUnitario);
    const conDescuentoCategoria = aplicarCategoria(subtotal, categoria); // Aplicamos descuento y impuesto de categoría
    const conDescuento = aplicarDescuento(conDescuentoCategoria); // Aplicamos descuento adicional
    const conImpuesto = aplicarImpuesto(conDescuento, estado); // Aplicamos impuestos del estado
    const costoEnvio = calcularEnvio(peso); // Calculamos el costo de envío
    const costoEnvioDescuento = aplicarDescuentoEnvio(costoEnvio, tipoCliente); // Aplicamos descuento al envío
    return conImpuesto + costoEnvioDescuento;
}