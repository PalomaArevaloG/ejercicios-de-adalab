"use strict";
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);
const btn2 = document.querySelector(".js-dog2");
btn2.addEventListener("click", getDogImage);

function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
        .then((response) => response.json())
        .then((data) => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}
/// como hacer que salga en el segundo img???? encadenando