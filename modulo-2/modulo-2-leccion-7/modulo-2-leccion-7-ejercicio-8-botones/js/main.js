"use strict";

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

function change() {
    body.classList.toggle("red");
}
buttons[0].addEventListener("click", change);
buttons[1].addEventListener("click", change);
buttons[2].addEventListener("click", change);