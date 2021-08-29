"use strict";
const serie = document.querySelector(".serie");
const book = document.querySelector(".book");

const button = document.querySelector(".btn");
let serieOrBook = [];

// bucle for...of
function formHandler() {
    serieOrBook[0] = serie.value;
    serieOrBook[1] = book.value;
    for (const input of serieOrBook) {
        alert(`A mí también me encantó ${input}! Tenemos mucho en común, humana.`);
    }
}
button.addEventListener("click", formHandler);