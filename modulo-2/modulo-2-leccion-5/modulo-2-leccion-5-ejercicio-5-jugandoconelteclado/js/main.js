'use strict'
//no necesito traer elementos por que voy a trabajar sobretodoeldocumento
const body = document.querySelector('.body');

function pulsarTecla(event) {
    console.log(event);
    if (event.key === "r") {
        body.classList.remove("morado");
        body.classList.add("rojo");

    } else if (event.key === "m") {
        body.classList.remove("rojo");
        body.classList.add("morado");
    }
}
document.addEventListener("keydown", pulsarTecla)