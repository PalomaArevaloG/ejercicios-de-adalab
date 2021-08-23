"use strict";
let ingredient = "g";

switch (ingredient) {
    case "Espinacas":
        console.log(
            `Tu ingrediente es ${ingredient}. Puedes hacerte unas espinacas rehogadas`
        );
        break;
    case "Merluza":
        console.log(
            `Tu ingrediente es ${ingredient}. Puedes hacerte una merluzita en salsa verde`
        );
        break;
    case "Pollo":
        console.log(
            `Tu ingrediente es ${ingredient}. Puedes freirte un filete con patatas`
        );
        break;

    default:
        console.log("Nada en la nevera");
}
// if (ingredient === "Pollo") {
//     console.log(
//         `Tu ingrediente es ${ingredient}. Puedes freirte un filete con patatas`
//     );
// } else if (ingredient === "Merluza") {
//     console.log(
//         `Tu ingrediente es ${ingredient}. Puedes hacerte una merluzita en salsa verde`
//     );
// } else if (ingredient === "Espinacas") {
//     console.log(
//         `Tu ingrediente es ${ingredient}. Puedes hacerte unas espinacas rehogadas`
//     );
// } else {
//     console.log("Nada en la nevera");
// }