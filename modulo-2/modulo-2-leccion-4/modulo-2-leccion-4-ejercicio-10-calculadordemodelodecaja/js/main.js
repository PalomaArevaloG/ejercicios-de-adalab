"use strict";
// Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30 px y el ancho total de la caja es: 34 px.
// La función tendrá 4 parámetros:
// el primero será un booleano para especificar si es border - box o no.
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border - size.
function calc(isBorderBox, width, padding, borderSize) {
    if (isBorderBox) {
        console.log(`Al ser borderbox el ancho total será ${width}`);
    } else {
        console.log(
            `Al ser contentbox el ancho total será ${
				width + 2 * padding + 2 * borderSize
			}`
        );
    }
}
console.log(calc(true, 150, 50, 5));
console.log(calc(false, 200, 100, 2));