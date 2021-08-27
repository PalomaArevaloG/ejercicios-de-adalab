"use strict";
const buttonElement = document.querySelector(".btn");
const buttonElement2 = document.querySelector(".btn2");

function handleButtonClick(event) {
    const Button = event.currentTarget;
    Button.classList.toggle("btnStyle");
}

buttonElement.addEventListener("click", handleButtonClick);
buttonElement2.addEventListener("click", handleButtonClick);