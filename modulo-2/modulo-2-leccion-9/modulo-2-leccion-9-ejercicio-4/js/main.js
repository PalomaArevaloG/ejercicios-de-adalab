"use strict";
// ** ** ** ** ** ** ** PENDIENTE ** ** ** ** ** ** ** * ++ +

const main = document.querySelector(".js_main");
const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
    },
];

function render() {
    for (const data of tasks) {
        if (data.completed /*=== true*/ ) {
            const html = `<li ><input type="checkbox" class="input checked" /><label>${data.name} </label></li> `;
            main.innerHTML += html;
        } else {
            const html = `<li><input type="checkbox" class="input"/><label>${data.name} </label></li_>`;
            main.innerHTML += html;
        }
    }
    for (let index = 0; index < tasks.length; index++) {
        const data = tasks[index];
        if (data.completed /*=== true*/ ) {
            const html = `<li ><input id =${index}type="checkbox" class="input checked" /><label>${data.name} </label></li> `;
            main.innerHTML += html;
        } else {
            const html = `<li><input id =${index} type="checkbox" class="input"/><label>${data.name} </label></li_>`;
            main.innerHTML += html;
        }
    }
    const inputs = document.querySelectorAll(".input");
    //const lists = document.querySelectorAll("li");

    for (eachInput of inputs) {
        eachInput.addEventListener(click, getCheckOut);
    }

    function getCheckOut(ev) {
        console.log(ev.target.parentNode.querySelector("label"));
        const labelSister = ev.target.parentNode.querySelector("label");
        labelSister.classList.toggle("complete");
    }
}

// function getCheckOut() {
//     let list;
//     lists.forEach((list) => list.classList.add("complete"));
// }
//inputs.forEach((input) => input.addEventListener("click", getCheckOut));