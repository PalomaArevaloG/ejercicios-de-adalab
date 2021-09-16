"use strict";
const listElement = document.querySelector(".js_list");
const numbers = [1, 2, 3];

for (const number of numbers) {
    //  listElement.innerHTML += `<li>${number}</li>`
    const newLi = document.createElement("li"); //creo los li
    const newContent = document.createTextNode(number); //creo el texto de los li
    newLi.appendChild(newContent); //añado el texto a los li
    listElement.appendChild(newLi); // añado los li al ul que es su madre
}