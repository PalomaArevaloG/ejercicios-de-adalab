"use strict";

// let avocados;
// const avocadoPrice = 1.5;
// const money = 33;

// if (money >= avocadoPrice) {
//     avocados = money / avocadoPrice;
//     console.log(`Puedo comprar ${avocados}`);
// } else {
//     avocados = 0;
//     console.log("no puedo");
// }

let avocados;
const avocadoPrice = 1.5;
const money = 1.5;
money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);

console.log(`Vas a comprar: ${avocados} aguacates`);