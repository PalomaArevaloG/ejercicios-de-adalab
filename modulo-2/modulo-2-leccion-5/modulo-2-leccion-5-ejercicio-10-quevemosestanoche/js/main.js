"use strict";

const button = document.querySelector(".btn");

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

function printMovies() {
    document.querySelector("body").innerHTML += `<ul>
                                                    <li class="inception-f">${inception}</li>
                                                    <li class="butterfly-f">${theButterFlyEffect}</li>
                                                    <li class="sunshine-f">${eternalSunshineOfTheSM}</li>
                                                    <li class="velvet-f">${blueVelvet}</li>
                                                    <li class="split-f">${split}</li>
                                                </ul>`;

    let film = document.querySelector("li");
    film.addEventListener("click", movieClickHandler);

    let inceptionEl = document.querySelector(".inception-f");
    let butterflyEl = document.querySelector(".butterfly-f");
    let sunshineEl = document.querySelector(".sunshine-f");
    let velvetEl = document.querySelector(".velvet-f");
    let splitEl = document.querySelector(".split-f");

    inceptionEl.addEventListener("click", movieClickHandler);
    butterflyEl.addEventListener("click", movieClickHandler);
    sunshineEl.addEventListener("click", movieClickHandler);
    velvetEl.addEventListener("click", movieClickHandler);
    splitEl.addEventListener("click", movieClickHandler);
}

button.addEventListener("click", printMovies);

function movieClickHandler(event) {
    console.log(event.currentTarget.innerHTML);
}