'use strict';

const button = document.querySelector('.js_btn');
const text = document.querySelector('.paragraph');


// handler
function showChange() {
    text.innerHTML = ('Mi primer click, ¡ole yo y la mujer que me parió!');
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showChange);