'use strict'
const box = document.querySelector('.box');
const title = document.querySelector('h2');
const paragraph = document.querySelector('p');

if (box.classList.contains("success")) {
    title.innerHTML = "Correcto";
    paragraph.innerHTML = "los datos son correctos";
} else if (box.classList.contains("error")) {
    title.innerHTML = "Error";
    paragraph.innerHTML = "Ha surgido un error";
} else if (box.classList.contains("warning")) {
    title.innerHTML = "aviso";
    paragraph.innerHTML = "Tenga cuidado";
}