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
