"use strict";
const btn = document.querySelector(".js_btn");
const user = document.querySelector(".js_user");
const nameUser = document.querySelector(".js_userName");
const repos = document.querySelector(".js_userRepositorios");
const img = document.querySelector(".js_image");

function getInfoGit() {
    let username = user.value;

    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            nameUser.innerHTML = data.name;
            repos.innerHTML = data.public_repos;
            img.src = data.avatar_url;
        });
}

btn.addEventListener("click", getInfoGit);
// function getDogImage() {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => response.json())
//         .then((data) => {
//             const img = document.querySelector("img");
//             img.src = data.message;
//             img.alt = "Un perro";
//         });
// }
// const btn = document.querySelector(".js-dog");
// btn.addEventListener("click", getDogImage);