'use strict';

// const kiwis = 5;
// const peras = 2;
// const uvas = 4;
// console.log((kiwis * 2) + (peras * 3) + (uvas * 0.5));

const item1 = "yogures";
const precio1 = 1.30;
const item2 = "leche";
const precio2 = 0.65;
const lista = document.querySelector(".js_lista");
//dos maneras:
lista.innerHTML = "<li>" + item1 + "<span>" /* para que se separe*/ + precio1 + "</span></li>";
lista.innerHTML = `<li> ${item2} ${precio2}</li>`;
//pero estas dos machacan una a la otra.para que no pase:
lista.innerHTML = lista.innerHTML + `<li> ${item1} ${precio1}</li>`;
//o
lista.innerHTML += `<li> ${item1} ${precio1}</li>`;