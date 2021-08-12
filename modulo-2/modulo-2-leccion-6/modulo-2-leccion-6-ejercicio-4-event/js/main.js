'use strict'

// elemento de HTML
const button = document.querySelector('.prueba');

// handler
function show(event) {
    console.log(event);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', show);

///es un método