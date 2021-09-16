"use strict";
const palettesContainer = document.querySelector(".js-palettes-container"); //4 seleccionar eltos de html donde pintar la paleta

let palettes = []; //7 variable de paletas global let porque van cambiando
let favorites = []; //14 variable de favoritos
//12 crear funcion manejadora
function handlePalette(ev) {
    console.log(ev.currentTarget.id); //13 identificar paleta clickada

    const selectedPalette = ev.currentTarget.id; // 14 añadir array de fav a la paleta clickada
    const objectClicked = palettes.find((palette) => {
        return palette.id === selectedPalette;
    });
    const favoritesFound = favorites.findIndex((fav) => {
        return fav.id === selectedPalette;
    }); // si devuelve -1 no se encuantra, si está devuelve la posicion

    if (favoritesFound === -1) {
        favorites.push(objectClicked);
    } else {
        favorites.splice(favoritesFound, 1); //extraemos un elto de un array
    }
    console.log(objectClicked);

    console.log(favorites);
    paintPalettes();
    // ev.currentTarget.classList.toggle("palette--favorite"); // 15
}

function listenPalettes() {
    const listPalettes = document.querySelectorAll(".js-palette");
    for (const paletteEl of listPalettes) {
        paletteEl.addEventListener("click", handlePalette); //11escuchar evento click
    }
}

function isFavorite(palette) {
    const favoriteFound = favorites.find((fav) => {
        return fav.id === palette.id;
    });
    if (favoriteFound === undefined) {
        return false;
    } else {
        return true;
    }
} //busca si el elto esta en el array de fav y lo guardo en paintpalettes en una variable const is fav

function paintPalettes() {
    let html = "";
    let favClass = "";
    for (const palette of palettes) {
        const isFav = isFavorite(palette); //15 añadir o queitar de favorito
        if (isFav) {
            favClass = "palette-favorite";
        } else {
            favClass = "";
        }
        console.log(palette);
        html += `<li class="palettes js-palette ${favClass}"  id="${palette.id}">`;
        html += `<h2>${palette.name}</h2>`;
        html += `<div class="palette__colors">`;
        for (const palleteColor of palette.colors) {
            html += `<div class="palette__color" style="background-color:#${palleteColor}"></div>`;
        }
        html += `</div>`;
        html += `</li>`;
    }
    palettesContainer.innerHTML = html;
    listenPalettes();
}

// function paintPalettes() {
//     //7 pinto en el html
//     let html = "";
//     for (const palette of palettes) {
//         console.log(palette);
//         html += `<li class="palettes js-palette" id="${palette.id}">`;
//         html += `<h2>${palette.name}</h2>`;
//         html += `<div class="palette__colors">`;
//         for (const paleteColor of palette.colors) {
//             // 8pintar muchas paletas
//             html += `<div class="palette__color" style="background-color: #${paleteColor}"></div>`;
//         }
//         html += `</div>`;
//         html += `</li>`;
//     }
//     palettesContainer.innerHTML = html;
//     listenPalettes();
// }

fetch(
        "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
    ) //5 fetch al servidor
    .then((response) => response.json()) //6 parseo eltos
    .then((data) => {
        palettes = data.palettes; //7 datos que quiero pintar en el html
        paintPalettes(); //7 llamo a funcion para pintar el html
    });