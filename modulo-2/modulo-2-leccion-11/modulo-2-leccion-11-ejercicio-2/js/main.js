"use strict";

function getCharacter() {
    let character = document.querySelector(".js-cast").value;
    fetch(`https://swapi.dev/api/people/?search=${character}`)
        .then((response) => response.json())
        .then((data) => {
            let result = document.querySelector(".js-result");
            result.innerHTML += `<li>Personaje: ${data.results[0].name}. Género: ${data.results[0].gender}</li>`;
            console.log(data.count);
            //if (data.count > 1) {
            let resultsArray = data.results;
            for (let index = 0; index < resultsArray.length; index++) {
                result.innerHTML += `<li>Personaje: ${data.results[index].name}. Género: ${data.results[index].gender}</li>`;
            }
            // }
        });
}
document.querySelector(".js-btn").addEventListener("click", getCharacter);