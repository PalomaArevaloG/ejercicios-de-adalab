"use strict";

const light = document.querySelector(".js-light");
const dark = document.querySelector(".js-dark");
const body = document.querySelector("body");

function changeColors(event) {
    if (event.currentTarget.value === "claro") {
        body.classList.add("light");
        body.classList.remove("dark");
    } else if (event.currentTarget.value === "oscuro") {
        body.classList.add("dark");
        body.classList.remove("light");
    }
    localStorage.setItem("theme", event.currentTarget.id);
    console.log(event.currentTarget.id);
}
light.addEventListener("click", changeColors);
dark.addEventListener("click", changeColors);

function storeTheme() {
    if (localStorage.getItem("theme") === "oscuro") {
        body.classList.add("dark");
        body.classList.remove("light");
    } else if (localStorage.getItem("theme") === "claro") {
        body.classList.remove("dark");
        body.classList.add("light");
    }
}
storeTheme();