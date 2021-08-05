'use strict';
// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const paragraph = document.querySelector('.parrafo');

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
paragraph.innerHTML = paragraph.innerHTML + ' mundo';