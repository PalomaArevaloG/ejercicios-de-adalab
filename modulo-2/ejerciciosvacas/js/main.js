"use strict";
// const l = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
// let c = 0;
// for (const n of l) {
//     c++;
// }
// console.log(c);

const l = [
    "Lunes",
    "MariCarmen",
    "MariCarmen",
    "MariCarmen",
    "Viernes",
    "Sábado",
];
let c = 0;
for (const n of l) {
    if (n === "MariCarmen") {
        c++;
    }
}
console.log(c);