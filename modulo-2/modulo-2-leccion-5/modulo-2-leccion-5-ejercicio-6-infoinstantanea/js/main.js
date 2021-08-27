"use strict";
const inputElement = document.querySelector(".input");
const paragraphElement = document.querySelector(".paragraph");

function handleUpdate(event) {
    paragraphElement.innerHTML = event.currentTarget.value;
    console.log(event.currentTarget.value);
}

inputElement.addEventListener("keyup", handleUpdate);