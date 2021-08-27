"use strict";
const buttonElement = document.querySelector(".btn");

function handleButtonClick() {
    buttonElement.classList.toggle("btnStyle");
}

buttonElement.addEventListener("click", handleButtonClick);