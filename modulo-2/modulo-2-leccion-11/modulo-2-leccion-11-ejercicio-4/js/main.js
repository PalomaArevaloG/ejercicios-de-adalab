"use strict";

const message = document.querySelector(".js-message");
const name = document.querySelector(".js-name");

function write() {
    message.innerHTML = name.value;
    localStorage.setItem("name", name.value);
}
name.addEventListener("keyup", write);

function recover() {
    const nameStore = localStorage.getItem("name");
    message.innerHTML = nameStore;
}
recover();