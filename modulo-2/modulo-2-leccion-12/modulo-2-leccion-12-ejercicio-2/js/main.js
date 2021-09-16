"use strict";
const divImg = document.querySelector(".js_images"); // me traigo el div
const select = document.querySelector("#city");
//creo imagenenes nuevas
const img1 = document.createElement("img");
divImg.appendChild(img1);
const img2 = document.createElement("img");
divImg.appendChild(img2);
const img3 = document.createElement("img");
divImg.appendChild(img3);

function handlerCity() {
    let value = select.value;
    if (value === "Madrid") {
        img1.src = "./img/madrid.jpg";
        img1.alt = "Madrid";
        img2.src = "./img/madrid copy.jpg";
        img2.alt = "Madrid";
        img3.src = "./img/madrid copy 2.jpg";
        img3.alt = "Madrid";
    } else if (value === "París") {
        img1.src = "./img/paris.jpg";
        img1.alt = "París";
        img2.src = "./img/paris copy.jpg";
        img2.alt = "Paris";
        img3.src = "./img/paris copy 2.jpg";
        img3.alt = "Paris";
    } else if (value === "NuevaYork") {
        img1.src = "./img/NuevaYork copy.jpg";
        img1.alt = "NuevaYork";
        img2.src = "./img/NuevaYork copy 2.jpg";
        img2.alt = "NuevaYork";
        img3.src = "./img/NuevaYork.jpg";
        img3.alt = "NuevaYork";
    }
}

select.addEventListener("change", handlerCity);