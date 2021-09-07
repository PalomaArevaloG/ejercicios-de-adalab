"use strict";

const list = document.querySelectorAll(".teacher");

function paintSelected(ev) {
    // console.log(ev.currentTarget);
    // console.log(ev.target);
    const elemento = ev.currentTarget;
    const texto = elemento.querySelector(".favorite");
    elemento.classList.toggle("teacher--selected");
    if (texto.innerHTML === "Añadir") {
        texto.innerHTML = "Quitar";
    } else {
        texto.innerHTML = "Añadir";
    }
}
for (const item of list) /*bucle para que escuche cada elemento del listado*/ {
    item.addEventListener("click", paintSelected);
}