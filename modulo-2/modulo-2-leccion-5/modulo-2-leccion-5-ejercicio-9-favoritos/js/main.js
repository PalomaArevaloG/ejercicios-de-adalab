"use strict";

// // Añadir la clase.teacher--selected si no la tiene, o quitarla si la tiene.

const isra = document.querySelector(".teacher--isra");
const tuerto = document.querySelector(".teacher--tuerto");
const nasi = document.querySelector(".teacher--nasi");
const fav1 = document.querySelector(".favorite");
const fav2 = document.querySelector(".favorite");
const fav3 = document.querySelector(".favorite");

function handleSelectedClick(event) {
    const selectedTeacher = event.currentTarget;

    if (selectedTeacher.classList.contains("teacher--selected")) {
        selectedTeacher.classList.toggle("teacher--selected");
        selectedTeacher.querySelector(".favorite").innerHTML = "Añadir";
    } else {
        selectedTeacher.classList.toggle("teacher--selected");
        selectedTeacher.querySelector(".favorite").innerHTML = "Quitar";
    }
}

isra.addEventListener("click", handleSelectedClick);
tuerto.addEventListener("click", handleSelectedClick);
nasi.addEventListener("click", handleSelectedClick);

// // Modificar el texto del span.favorite sustituyéndolo por 'Quitar'
// // si en ese momento contiene 'Añadir', o por 'Añadir'
// // si contiene 'Quitar'.
// // Nota: con querySelector buscamos un elemento dentro de otro.Hasta ahora lo habíamos usado para buscar dentro de document(todo nuestro documento HTML), con document.querySelector().
// // Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector().