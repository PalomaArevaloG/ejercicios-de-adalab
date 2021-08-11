'use strict';


// elemento de HTML
const input = document.querySelector('.input');
const button = document.querySelector('.btn');

// // handler
// function sayHi() {
//     console.log(`Hola ${input.value}`);
// }

// // listener sobre el elemento, con tipo de evento y handler
// button.addEventListener('click', sayHi);

//arrow

button.addEventListener('click', () => console.log(`Hola ${input.value}`));