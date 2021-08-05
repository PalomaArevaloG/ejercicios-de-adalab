'use strict'

const name = 'Paloma Arévalo González';

const htmlToShow = `<p> Mi nombre es ${name} y tiene ${name.length} letras`;

const mainContent = document.querySelector(".content");
mainContent.innerHTML = htmlToShow;