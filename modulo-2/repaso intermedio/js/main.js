"use strict";

const body = document.querySelector(".body");
const face = document.querySelector(".face");
const select = document.querySelector(".select");
const button = document.querySelector(".btn");

function changeMood() {
    face.innerHTML = select.value;
    let number = getRandomInt(101);

    if (number % 2 == 0) {
        body.classList.remove("odd");
        body.classList.add("even");
    } else {
        body.classList.remove("even");
        body.classList.add("odd");
    }
    console.log(number);
}

function getRandomInt(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * max);
}

button.addEventListener("click", changeMood);