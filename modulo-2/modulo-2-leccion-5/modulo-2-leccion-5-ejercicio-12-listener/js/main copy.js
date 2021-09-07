"use strict";

const list = document.querySelector(".teachers");

function paintSelected(ev) {
    // console.log(ev.currentTarget);
    // console.log(ev.target);
    const child = ev.target;
    const elemento = child.parentNode; //si pulso en ul lo hace en body si pulso li va al ul

    const texto = elemento.querySelector(".favorite");
    elemento.classList.toggle("teacher--selected");
    if (texto.innerHTML === "Añadir") {
        texto.innerHTML = "Quitar";
    } else {
        texto.innerHTML = "Añadir";
    }
}

list.addEventListener("click", paintSelected);