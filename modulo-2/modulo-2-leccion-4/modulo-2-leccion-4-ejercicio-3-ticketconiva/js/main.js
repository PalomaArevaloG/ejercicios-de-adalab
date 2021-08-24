"use strict";

function precio(a) {
    return a;
}

const precioSinIva = 100;
const precioConIva = precioSinIva * 0.21 + precioSinIva;
console.log(
    `El precio sin IVA es ${precioSinIva} , el precio con IVA es ${precioConIva} `
);