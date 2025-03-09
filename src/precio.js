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
