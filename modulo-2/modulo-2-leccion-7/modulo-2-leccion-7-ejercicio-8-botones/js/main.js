"use strict";
// Guardamos una lista de todos los parrafos de la página
const buttons = document.querySelectorAll("button");


for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("red");
}